const menteeSchema = require('../model/Mentee.js')
const userSchema = require('../model/User.js')

const mentees = async(req,res) =>{
    try{
        const mentee = await userSchema.find({role:'Mentee'})
        res.status(200).json({
            mentee
        })

    }catch(error){
        return res.status(500).json({message: error.message})

    }
}

const menteeDetail = async(req,res) =>{
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

const menteeUpdate = async(req,res) =>{
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


module.exports = { mentees, menteeDetail, menteeUpdate }