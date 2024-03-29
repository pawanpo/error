 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const PostSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    status:{

        type: String,
        default: 'public'
    },
    description:{
        type: String,
        required: true
    },
    creationdate:{
        type: Date,
        default: Date.now()
    }



 });

 module.exports = mongoose.model('Post', PostSchema);