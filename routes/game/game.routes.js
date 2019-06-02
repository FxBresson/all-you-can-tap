/*
Imports
*/
  // Node
  const express = require('express');
  const gameRouter = express.Router();

  // Inner
  const Mandatory = require('../../services/mandatory.service');
  const Vocabulary = require('../../services/vocabulary.service');
  const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
  const { checkFields } = require('../../services/request.service');
  const { postGame } = require('./game.controller');
  const GameModel = require('../../models/game.model');
//

/*
Routes definition
*/
  class GameRouterClass {

    // Inject Passport to secure routes
    constructor({ passport }) {
        this.passport = passport;
    }
    
    // Set route fonctions
    routes(){

      /**
       * POST Route to create new identity
       * @param body: Object => email: String (unique), password: String
       * @callback => create identity and associated user
      */
      gameRouter.post( '/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
        // Check request body
        if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
        // Check fields in the body
        const { miss, extra, ok } = checkFields( Mandatory.postScore, req.body );

        //=> Error: bad fields provided
        if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
        else{
          req.body.user = req.user._id
          //=> Request is valid: use controller
          postGame(req.body)
            .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
          };
        });
        
        
        /**
         * GET Route to check identity token (for Angular AuthGuard)
         * @param passport: AuthStrategy => use the access token to check user identity
         * @callback => send user _id and date informations
         */
        gameRouter.get( '/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
          GameModel.find()
            .populate('user')
            .exec((err, games) => {
              if(err) { return sendApiErrorResponse(res, Vocabulary.request.error, err)}
              return sendApiSuccessResponse(res, Vocabulary.request.success, games)
            })
      });

        
    };

    // Start router
    init(){
      // Get route fonctions
      this.routes();

      // Sendback router
      return gameRouter;
    };
  };
//

/*
Export
*/
    module.exports = GameRouterClass;
//