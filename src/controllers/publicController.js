const publicModel = require('../models/publicModel');

const publicController = {
    getAllPhones: (req, res) => {
      publicModel.getAllPhones((error, results) => {
        if (error) {
          return res.status(500).json({ message: 'Failed to retrieve phones' });
        }
        return res.status(200).json(results);
      });
    },

    searchPhonesByNameOrBrand: (req, res) => {
        const query = req.query.query;
        publicModel.searchPhones(query, (error, results) => {
          if (error) {
            return res.status(500).json({ message: 'Failed to search phones' });
          }
          return res.status(200).json(results);
        });
      },

      getAllBrands: (req, res) => {
        publicModel.getAllBrands((error, results) => {
          if (error) {
            return res.status(500).json({ message: 'Failed to retrieve brands' });
          }
          return res.status(200).json(results);
        });
      }
    };

    module.exports = publicController;