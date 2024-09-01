const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema
({

    sname: 
    {
        type: String,
        required: true
    },
    grade: 
    {
        type: String,
        required: true
    },
    status: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    rollno:
    {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Alien',alienSchema)
