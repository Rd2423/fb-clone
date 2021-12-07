const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    text: {
        type: String,
        required: true,
        length: [200]
    },
    imgURl: {
        type: String,
        required: false
    },
    user: [{ type: Schema.Types.ObjectId, ref:'User'}]
},
{
    toJSON:{
        virtuals: true
    }
});

const Post = model('Post', postSchema);

module.exports = Post;