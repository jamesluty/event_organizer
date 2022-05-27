const Event = require("../models/events.model");

module.exports = {
    findAll: (req, res) => {
        Event.find()
            .then(allEvents => res.json({ events: allEvents }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    findOne: (req, res) => {
        Event.findById(req.params.id)
            .then(oneEvent => res.json({ event: oneEvent }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    createOne: (req, res) => {
        Event.create(req.body)
            .then(newEvent => res.json({ event: newEvent }))
            .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
    },

    updateOne: (req, res) => {
        Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updateEvent => res.json({ event: updateEvent }))
            .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
    },

    deleteOne: (req, res) => {
        Event.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    }
}