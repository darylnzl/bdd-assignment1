const phoneModel = require('../models/phoneModel');

const phoneController = {
    addPhone: (req, res) => {
        const { name, brand_id, price, description, imageURL } = req.body;
        const data = { name, brand_id, price, description, imageURL };
        phoneModel.addPhone(data, (error, results) => {
            if (error) {
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(201).json({ message: 'Phone added successfully' });
            }
        });
    },

    updatePhone: (req, res) => {
        const { phone_id, name, brand_id, price, description, imageURL } = req.body;
    
        if (!phone_id || !name || !brand_id || !price || !description) {
            return res.status(400).json({ message: 'Required fields are missing' });
        }
    
        const data = { phone_id, name, brand_id, price, description, imageURL };
    
        phoneModel.updatePhone(data, (error, results) => {
            if (error) {
                res.status(500).json({ message: 'Internal server error' });
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Phone not found' });
            } else {
                res.status(200).json({ message: 'Phone updated successfully' });
            }
        });
    },

    getAllPhones: (req, res) => {
        phoneModel.getAllPhones((error, results) => {
            if (error) {
                res.status(500).json({ message: 'Failed to retrieve phones' });
            } else {
                res.status(200).json(results);
            }
        });
    },

    searchPhonesByNameOrBrand: (req, res) => {
        const { search } = req.query;

        phoneModel.searchPhonesByNameOrBrand(search, (error, results) => {
            if (error) {
                console.error("Error searching phones:", error);
                res.status(500).json({ message: 'Failed to search phones' });
            } else {
                res.status(200).json(results);
            }
        });
    },
};

module.exports = phoneController;
