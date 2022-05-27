const User = require("../models/users.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.LOGIN_SECRET_KEY);
    
                res
                    .cookie("usertoken", userToken, process.env.LOGIN_SECRET_KEY, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    },

    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.LOGIN_SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, process.env.LOGIN_SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },

    findAll: (req, res) => {
        User.find()
            .then(allUsers => res.json({ users: allUsers }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    findOne: (req, res) => {
        User.findOne({email: req.params.email})
            .then(oneUser => res.json({ email: oneUser }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    updateOne: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updateUser => res.json({ user: updateUser }))
            .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
    },

    deleteOne: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
}