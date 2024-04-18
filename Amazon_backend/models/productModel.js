const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    

})

const productModel =mongoose.model('Products', productSchema);

// const testProduct = new productModel({
//     title: 'Titan-Watch',
//     price: 100,
// })
// testProduct.save()
//     .then(data => {
//         console.log('Product is saved')
//     })

module.exports = productModel;