const mongoose = require('mongoose')
const ProductsSchema = new mongoose.Schema(
    {
        productname:{
            type: String,
            required: true
        },
        details:{
            type: String,
            required: true
        },
        price:{
            type: String,
            required: true
        },
        imageurl:{
            type: String
        }
    }
)
const ProductsModel = new mongoose.model('products', ProductsSchema)
module.exports = ProductsModel