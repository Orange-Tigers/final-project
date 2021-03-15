const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/ProductsModel');



//Product Creation Route

router.post(
    '/add',             // //http://www.myapp.com/product/
    (req, res) => {

        // Capture the data in the BODY section
        const formData = {
            productname: req.body.productname,
            details: req.body.details,
            price: req.body.price,
            imageurl: req.body.imageurl
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
                res.json(error)
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
                'productname': req.body.productname
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
// Product listing
router.get(
    '/list',                 
    (req, res) => {

        ProductsModel
        .find()
        .then(
            (dbDocuments) => {
                res.send(dbDocuments)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )

    }
);

module.exports = router;
