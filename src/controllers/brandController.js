const brandModel = require('../models/brandModel');

const brandController = {

    addBrand: (req, res) => {
        const { name } = req.body;
        const data = { name };
        brandModel.addBrand(data, (error, results) => {
            if (error) {
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(201).json({ message: 'Brand added successfully' });
            }
        });
    },

    getAllBrands: (req, res) => {
        brandModel.getAllBrands((error, results) => {
          if (error) {
            return res.status(500).json({ message: 'Failed to retrieve brands' });
          }
          return res.status(200).json(results);
        });
      }
};

module.exports = brandController;