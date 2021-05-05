const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    'initialData':
    {
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
    }
    // date : {
    //     type : Date,
    //     default : Date.now
    // }
});

mongoose.exports = mongoose.model('Posts',PostSchema);