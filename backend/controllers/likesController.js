require('dotenv').config();
const likesId = `${process.env.LIKES_OBJ_ID}`;

const Likes = require('../models/likes');

// get number of likes
const getLikes = async(req, res) => {

    const likes =  await Likes.findById(likesId)
    res.status(200).json(likes);
}

const updateLikes = async(req, res) => {

    await Likes.findOneAndUpdate({_id: likesId}, {
        ...req.body
    })
    res.status(200).json({ mssg: `likes updated to ${req.body["likes"]}`});
}

module.exports = {
    getLikes,
    updateLikes
}