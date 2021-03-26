const mongoose = require('mongoose')
const WishlistSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        productId: { type: String, required: true },
    }
)
const WishlistModel = new mongoose.model('wishlists', WishlistSchema)
module.exports = WishlistModel
