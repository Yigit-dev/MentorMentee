const mentorSchema = require('../models/Mentor');

const mentors = async(req, res) => {
    try {
        const mentor = await mentorSchema.find()
        res.status(200).json({
            mentor
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const mentorDetail = async(req, res) => {
    try {
        const {id} = req.params
        const mentorDetail = await PostSchema.findById(id)
        res.status(201).json({
            mentorDetail
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const mentorUpdate = async(req, res) => {
    try {
        const {id} = req.params
        const updateMentor = await PostSchema.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json({
            updateMentor
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const searchMentor = async (req, res) => {
    const {search} = req.query
    try {
        const title = new RegExp(search, "i")

        const mentors = await mentorSchema.find({ $or: [{title}], $tag: {$in: tag.split(",")}})

        res.status(201).json({
            mentors
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { mentors, mentorDetail, mentorUpdate, mentorDelete, searchMentor }