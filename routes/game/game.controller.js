/*
Import
*/
  const GameModel = require('../../models/game.model')
//

/*
Methods
*/

/**
 * Register new identity and user
 * @param body => email: String (unique), password: String
*/
const postGame = body => {
  return new Promise( (resolve, reject) => {
    GameModel.create(body)
      .then( mongoResponse => resolve(mongoResponse))
      .catch( mongoResponse => reject(mongoResponse))
  })
};

/*
Export
*/
module.exports = {
  postGame,
   
}
//