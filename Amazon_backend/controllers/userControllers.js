
const UserModel = require('../models/userModel.js')

const getAllUser = async (req, res) =>{
    const data = await UserModel.find();
    console.log(data)
    console.log(req.url)
    res.json({
        status: 'success',
        message: 'All users',
        data: {
            user: data,
        }
    })
}

const getOneUser = async(req, res)=>{
    try{

        const data = await userModel.findOne({_id: req.params.id});
        console.log(data)
        console.log(req.url)
        res.json({
            status: 'success',
            message: 'Find.....',
            data: {
                user: data,
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

const addUser = async (req, res) =>{
    try{

        const data = await UserModel.create(req.body);
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

const updateUser = async(req, res)=>{
    try{
        const reqId = req.params.id;
        const data = {...req.body,_id: reqId};
        const result = await userModel.findOneAndUpdate({_id: reqId}, data);
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

const replaceUser = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const data = {...req.body,_id: reqId};
        const result = await userModel.findOneAndReplace({_id: reqId}, data);
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

const deleteUser = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const result = await userModel.deleteOne({_id: reqId});
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
    getAllUser,
    addUser,
    replaceUser,
    deleteUser,
    getOneUser,
    updateUser
}