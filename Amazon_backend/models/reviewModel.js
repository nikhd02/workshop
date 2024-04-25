const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true,
        null: false
    },
    userId: {
        type: String,
        required: true,
        null: false
    },
    review: {
        type: String,
        // required: true
        null: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    

})

const reviewModel =mongoose.model('Review', reviewSchema);

module.exports = reviewModel;