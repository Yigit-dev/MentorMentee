const menteeSchema = require('../models/Mentee.js')


const getMentee = async(req,res) =>{
    try{
        const newMentee =await menteeSchema.find()
        res.status(200).json({
            newMentee
        })

    }catch(error){
        return res.status(500).json({message: error.message})

    }
}
const getMenteeDetail = async(req,res) =>{
    try{
        const {id} = req.params;
        const DetailMentee =await menteeSchema.findById(id)
        res.status(200).json({
            DetailMentee
        })

    }catch(error){
        return res.status(500).json({message: error.message})

    }
}
const getMenteeUpdate = async(req,res) =>{
    try{
        const {id} = req.params;
        const updateMentee =await menteeSchema.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({
            updateMentee
        })

    }catch(error){
        return res.status(500).json({message: error.message})

    }
}


module.exports = {getMentee,getMenteeDetail,getMenteeUpdate,deleteMentee}