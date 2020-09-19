const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    firstName: {type: String, required: true},
    lname: {type : String, required: true},
    email: String,
    contact: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

const User=mongoose.model('user', userSchema);

module.exports=User;