const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send("All fields are required");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.send("Registered Successfully");

    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.send("Invalid Credentials");
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            return res.send("Invalid Credentials");
        }

        res.send("Login Success");

    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;