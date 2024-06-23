const userModel = require('../models/userModel');

const userController = {
    registerAdmin: (req, res) => {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        userModel.registerAdmin({ name, email, password, role }, (error, adminId) => {
            if (error) {
                console.error('Error registering admin:', error);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(201).json({ message: 'Admin registered successfully', adminId });
            }
        });
    },

    login: (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        userModel.login(email, password, (error, isValid) => {
            if (error) {
                console.error('Error in login:', error);
                res.status(500).json({ message: 'Internal server error' });
            } else if (!isValid) {
                res.status(401).json({ message: 'Invalid credentials' });
            } else {
                res.status(200).json({ message: 'Login successful' });
            }
        });
    }

};

module.exports = userController;
