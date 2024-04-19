const { Query } = require('mongoose');
const productModel = require('../models/productModel.js');
const { response } = require('express');

const getAllProducts = async (req, res) =>{
    const {sort='price', page = 1, pageSize = 3, ...q} = req.query;
    const sortStr = sort.split(',').join(' ');
    console.log(q);
    // const data = await productModel.find();

    let query = productModel.find(q);

    query = query.sort(sortStr);

    const skip = pageSize*(page - 1);
    // const limit = 3;

    query = query.skip(skip).limit(pageSize);


    const product = await query;


    // console.log(data)
    console.log(req.url)
    res.json({
        status: 'success',
        message: 'All products',
        data: {
            // products: data,
            products: product,
        }
    })
}

const getOneProducts = async(req, res)=>{
    try{

        const data = await productModel.findOne({_id: req.params.id});
        console.log(data)
        console.log(req.url)
        res.json({
            status: 'success',
            message: 'Find.....',
            data: {
                products: data,
            }
        })
    }catch(err){
        console.log(err)
        res.json({
            status: 'failed',
            message: err.message
        })
    }
}

const addProduct = async (req, res) =>{
    try{

        const data = await productModel.create(req.body);
        console.log(data)
        console.log(req.body)
        res.json({
            status: 'success'
        });
    }catch(err){
        console.log(err)
        res.json({
            status: 'failed',
            message: err.message
        });
    }

}

const updateProduct = async(req, res)=>{
    try{
        const reqId = req.params.id;
        const data = {...req.body,_id: reqId};
        const result = await productModel.findOneAndUpdate({_id: reqId}, data);
        console.log(data)
        console.log(req.body)
        res.json({
            status: 'success'
        });
    }
    catch(err){
        console.log(err)
        res.json({
            status: 'failed',
            message: err.message
        });
    }
}

const replaceProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const data = {...req.body,_id: reqId};
        const result = await productModel.findOneAndReplace({_id: reqId}, data);
        console.log(data)
        console.log(req.body)
        res.json({
            status: 'success'
        });
    }
    catch(err){
        console.log(err)
        res.json({
            status: 'failed',
            message: err.message
        });
    }
    
}

const deleteProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const result = await productModel.deleteOne({_id: reqId});
        console.log(result)
        res.json({
            status: 'success'
        });
    }
    catch(err){
        console.log(err)
        res.json({
            status: 'failed',
            message: err.message
        });
    }
}



module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct,
    getOneProducts,
    updateProduct
}