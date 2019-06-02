/* 
Definition
The object Model{} is used in main.controller
You need to add a new propetry for each Mongoose schema
*/
    const Models = {
        identity: require('./identity.model'),
        game: require('./game.model')
    };
//

/* 
Export
*/
    module.exports = Models;
//