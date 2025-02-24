const mongoose = require('mongoose')
const User = mongoose.Schema({
    Fullame:{
        type: String
    }, 

    Username:{
        type : String,
        require : true,
        unique: true 
    },

    Email:{
        type : String,
        require : true,
        unique: true 
    },
    
    Password :{
        type : String ,
        require : true,
    },


    
    
    
})
const  user = mongoose.model('user',User)
module.exports =user