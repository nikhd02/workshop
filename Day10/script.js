const express = require('express')
const app = express()
const fs = require('fs')
const fsPromises = require("fs/promises");
const ProductController = require('./controllers_/productsControllers.js')
const userController = require('./controllers_/userController.js')

app.use(express.json())

app.use((req, res, next) => {

    console.log(req.url);
    const time = new Date().toLocaleString();
    const append = fsPromises.appendFile('log.txt', req.url + '\t' + time + '\n')
    next();
})

// app.get('/home', (req, res) => {
//     res.send('Hello World')


// })
// app.post('/post', (req, res) => {
//     res.send('Hello World')
// })


app.listen(1164, () => {
    console.log('Server has been started...')
})

// app.get('/api/user', (req, res) => {
//     res.status(501);
//     res.json({
//         status: 'error',
//         message: 'Not Implemented'
//     });
// })
// app.post('/api/user', (req, res) => {
//     res.status(501);
//     res.json({
//         status: 'error',
//         message: 'Not Implemented'
//     });
// })
// app.put('/api/user', (req, res) => {
//     res.status(501);
//     res.json({
//         status: 'error',
//         message: 'Not Implemented'
//     });
// })
// app.patch('/api/user', (req, res) => {
//     res.status(501);
//     res.json({
//         status: 'error',
//         message: 'Not Implemented'
//     });
// })

// app.get('/api/products', ProductController.getAllProducts)
// app.post('/api/products', ProductController.addProduct)
// app.put('/api/products', ProductController.updateProduct)

// app.get('/api/user',userController.getUser)
// app.put('/api/user',userController.updateUser)
// app.post('/api/user',userController.addUser)



app.route('/api/products')
    .get(ProductController.getAllProducts)
    .post(ProductController.addProduct);

app.route('/api/user')
    .get(userController.getUser)
    .post(userController.addUser)
    .put(userController.updateUser)