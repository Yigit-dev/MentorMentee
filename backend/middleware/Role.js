const isMentee = (req, res, next) => {
    if(req.user.role === "Mentee") {
        next()
    }else {
        res.status(403).json({message: "Bu kısmı görüntülemek için yetkiniz bulunmamaktadır."})
    }
}

const isMentor = (req, res, next) => {
    if(req.user.role === "Mentor") {
        next()
    }else {
        res.status(403).json({message: "Bu kısmı görüntülemek için yetkiniz bulunmamaktadır."})
    }
}

module.exports = {isMentee, isMentor}