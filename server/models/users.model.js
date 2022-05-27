const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"]
    },
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"]
    },
    address: {
        type: String,
        required: [true, "Address is required!"]
    },
    city: {
        type: String,
        required: [true, "City is required!"]
    },
    state: {
        type: String,
        required: [true, "State is required!"]
    },
    zipcode: {
        type: Number,
        require: [true, "Zip code is required!"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Email format is not valid, please re-enter valid email format"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters or longer"],
    }
}, {timestamps: true})

UsersSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value)

UsersSchema.pre('validate', function(next) {
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Password must match confirm password')
    }
    next();
})

UsersSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next()
        })
})

const User = mongoose.model("User", UsersSchema);

module.exports = User;