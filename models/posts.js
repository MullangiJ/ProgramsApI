const mongoose = require('mongoose')


const Post = new mongoose.Schema({
     
    uuid: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
    

})

module.exports = mongoose.model('Define',Post)
