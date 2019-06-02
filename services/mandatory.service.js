/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password', 'firstname', 'lastname'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        changePassword: ['password', 'newPassword'],
        postScore: ['score']
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//