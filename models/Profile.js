const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
},
name:{
    type: String,
    ref:"user"
    
},
email:{
    type: String,
    ref:"user"
    
},
dateOfReg:{
    type: Date,
    
},
lastLog:{
    type: Date,
    default:Date.now
},
status:{
    type: String,
}

})

module.exports = Profile = mongoose.model('profile', ProfileSchema)