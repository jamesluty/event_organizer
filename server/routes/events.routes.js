const EventsController = require("../controllers/events.controller");

module.exports = app => {
    app.get("/api/events", EventsController.findAll);
    app.get("/api/events/:id", EventsController.findOne);
    app.put("/api/events/:id", EventsController.updateOne);
    app.patch("/api/events/attending/:id", EventsController.updateOne);
    app.patch("/api/events/maybe/:id", EventsController.updateOne);
    app.post("/api/events", EventsController.createOne);
    app.delete("/api/events/:id", EventsController.deleteOne);
};