const userModel = require('../model/User')

const login = async (req, res) => {
    try{   
        const user = await  
        userModel.findOne({
            eposta: req.body.eposta
        })
        if (!user) return res.status(404).json({
            message: "E-mail or Password is wrong!",
            statuscode: 404
        })
        if (user.password != req.body.password) return res.status(404).json({
            message: "E-mail or Password is wrong!",
            statuscode: 404
        })
        return res.status(200).json({
            message: "Log-in success ",
            statuscode: 200,
            data: user

        })
    }catch(error){
        return res.status(404).json({
            message: "Log-in Function not work!",
            statuscode: 404
        })
    }
}

const signup = async(req, res) => {
    try{
        const user = await
        userModel.create( req.body)
        return res.status(200).json({
            message: "Sign-up correct!",
            statuscode: 200,
            data: user
        })

    }catch(error){
        return res.status(404).json({
            message: "Sign-up Function not work!",
            statuscode: 404
        })
    }
}

module.exports = {login, signup}