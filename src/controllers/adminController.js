const adminModel = require('../models/adminModel');

const adminController = {
    login: (req, res) => {
        const { email, password } = req.body;
        adminModel.login(email, password, (error, isValid) => {
            if (error) {
                res.status(500).json({ message: 'Internal server error' });
            } else if (!isValid) {
                res.status(401).json({ message: 'Invalid credentials' });
            } else {
                res.status(200).json({ message: 'Login successful' });
            }
        });
    },

    addPhone: (req, res) => {
        const { name, brand_id, price, description } = req.body;
        const data = { name, brand_id, price, description };
        adminModel.addPhone(data, (error, results) => {
            if (error) {
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(201).json({ message: 'Phone added successfully' });
            }
        });
    },

    addBrand: (req, res) => {
        const { name } = req.body;
        const data = { name };
        adminModel.addBrand(data, (error, results) => {
            if (error) {
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(201).json({ message: 'Brand added successfully' });
            }
        });
    }
};

module.exports = adminController;

