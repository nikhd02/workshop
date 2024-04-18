const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    

})

const userModel =mongoose.model('User', userSchema);

// const testProduct = new productModel({
//     title: 'Titan-Watch',
//     price: 100,
// })
// testProduct.save()
//     .then(data => {
//         console.log('Product is saved')
//     })

module.exports = userModel;