const mongoose = require('mongoose');

const Schema = mongoose.Schema

const likesSchema = new Schema({
    likes: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Likes', likesSchema);



