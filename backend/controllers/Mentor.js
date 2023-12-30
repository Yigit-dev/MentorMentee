const Mentor = require('../model/Mentor');
const User = require('../model/User');

const getMentors = async (req, res) => {
    try {
        const mentors = await User.find({ role: 'Mentor' });
        res.status(200).json({ mentors });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMentorDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const mentorDetail = await Mentor.findById(id);
        res.status(200).json({ mentorDetail });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMentor = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMentor = await Mentor.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ updatedMentor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const searchMentor = async (req, res) => {
    const { search } = req.query;
    try {
        const mentors = await Mentor.find({ title: new RegExp(search, "i") });
        res.status(200).json({ mentors });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getMentors, getMentorDetail, updateMentor, searchMentor };