const UsersController = require("../controllers/users.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/users/register", UsersController.register);
    app.post("/api/users/login", UsersController.login);
    app.post("/api/users/logout", UsersController.logout);
    app.get("/api/users", UsersController.findAll);
    app.get("/api/users/:id", UsersController.findOne);
    app.put("/api/users/:id", UsersController.updateOne);
    app.delete("/api/users/:id", UsersController.deleteOne);
};