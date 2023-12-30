const userSchema = require("../model/User");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userSchema.findById(id);
    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

const updateUser = async(req,res) =>{
    try{
        const {id} = req.params;
        const updateUser =await userSchema.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({
          updateUser
        })

    }catch(error){
        return res.status(500).json({message: error.message})

    }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userSchema.findByIdAndRemove(id);
    res.status(201).json({
      message: "Your deletion process is successful......",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser, updateUser, deleteUser };