//**************************************************** N O T E S ************************************************



const express = require('express')
const mongoose = require('mongoose');

const app = express();
const productModel = require('./models/productModel.js')
const productRouter = require('./routes/productsRoutes.js');

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.prkfvvn.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser = 'dubeyaadarsh221305';
const password = '1234';
const databaseName = 'Amazon-Backend';
const dbLink = url.replace('$_USERNAME_$', databaseUser).replace('$_PASSWORD_$', password).replace('$_DB_NAME_$', databaseName);
//  console.log(dbLink)
mongoose.connect(dbLink)
  .then(() => console.log('---------Database Connected!---------------'));
app.use(express.json());
app.use('/api/products', productRouter);
app.listen(3000,()=>{
    console.log('---------App Started-----------')
});