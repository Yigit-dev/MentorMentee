const userSchema = require('../model/User.js');


const createUser = async(req,res) =>{
    try{
        const newUser =await userSchema.create(req.body);
        res.status(200).json({
            newUser
        })

    }catch(error){
        return res.status(500).json({message: error.message})

    }
};

const getUser = async(req, res) => {
    try {
        const {id} = req.params
        const user = await userSchema.findById(id)
        res.status(201).json({
            user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteUser = async(req,res) =>{
    try{
        const {id} = req.params;
        await menteeSchema.findByIdAndRemove(id)
        res.status(201).json({
            message: "Your deletion process is successful......"
        })

    }catch(error){
        return res.status(500).json({message: error.message})

    }
}

module.exports = { getUser, createUser, deleteUser}