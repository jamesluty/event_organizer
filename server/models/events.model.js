const mongoose = require("mongoose");

const AttendingSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
})

const MaybeSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
})

const EventsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"]
    },
    url: {
        type: String,
    },
    eventName: {
        type: String,
        required: [true, "Name is required!"],
        maxlength: [50, "Summary can not be more then 50 characters!"]
    },
    date: {
        type: Date,
        required: [true, "Date is Required"]
    },
    time: {
        type: String,
        require: [true, "Time is required!"]
    },
    group: {
        type: String,
        default: null
    },
    summary: {
        type: String,
        required: [true, "Summary is required!"],
        maxlength: [100, "Summary can not be more than 255 characters!"]
    },
    details: {
        type: String,
        required: [true, "Details are required!"]
    },
    location: {
        type: String,
        required: [true, "location is required!"]
    },
    attending: [AttendingSchema],
    maybe: [MaybeSchema],
    isPrivate: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Event = mongoose.model("Event", EventsSchema);

module.exports = Event;