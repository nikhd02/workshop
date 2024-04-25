
const reviewModel = require('../models/reviewModel')

const getAllReview = async (req, res) =>{
    const data = await reviewModel.find();
    // console.log(data)
    console.log(req.url)
    res.json({
        status: 'success',
        message: 'All users',
        data: {
            user: data,
        }
    })
}


const addReview = async (req, res) =>{
    try{
        const data = await reviewModel.create(req.body);
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

const updateReview = async(req, res)=>{
    try{
        const reqId = req.params.id;
        const data = {...req.body,_id: reqId};
        const result = await reviewModel.findOneAndUpdate({_id: reqId}, data);
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


const deleteReview = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const result = await reviewModel.deleteOne({_id: reqId});
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
    getAllReview,
    addReview,
    updateReview,
    deleteReview
}