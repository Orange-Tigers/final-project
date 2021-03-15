const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/ProductsModel.js');

//Product Creation Route

router.post(
    '/',             // //http://www.myapp.com/product/
    (req, res) => {

        // Capture the data in the BODY section
        const formData = {
            name: req.body.name,
            details: req.body.details,
            price: req.body.price,
            image: req.body.image
        }

        // Instantiate an instance of the ProductsModel constructor
        const newProductModel = new ProductsModel(formData);

        // Using newProductModel object to save to the database 
        newProductModel
        .save()
        // If Promise resolves...
        .then(
            (dbDocument) => {
                res.send(dbDocument)
            }
        )
        // If Promise rejects...
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
);

//Product Update Route

router.post(
    '/update',
    (req, res) => {

        ProductsModel
        .findOneAndUpdate(
            {
                'model': req.body.model
            },
            {
                $set: {
                    price: req.body.price
                }
            }
        )
        .then(
            (dbDocument) => {
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
)


module.exports = router;
