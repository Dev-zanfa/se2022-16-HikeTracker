'use strict'

const UserDAO = require('../daos/userDAO');
const LoginService = require("../services/loginService");

class LoginController {
    constructor(dbManager) {
        const userDAO = new UserDAO(dbManager);
        this.service = new LoginService(userDAO);
    }

    async login(email, password) {
        const genericFailureStatus = 500;
        const genericFailureMessage = "generic failure status";
        let response = {};
        try {
            response.body = await this.service.login(email, password);
            response.returnCode = 200;
        } catch (err) {
            console.log(err);
            switch(err.returnCode){
                case 4:
                    response.returnCode = 404;
                    response.body = err.message;
                    break
                default:
                    response.returnCode = genericFailureStatus;
                    response.body = genericFailureMessage;
            }
        }
        return response;
    }    


    getPermission = (authorizedRoles) => {
        return async (req, res, next) => {
            const userId = req.user.id;
            const user = await userDAO.getUserById(userId);
            authorizedRoles.include(user.role)
                ? next()
                : res.status(401).send("unauthorized");
        }
    };

}

module.exports = LoginController;