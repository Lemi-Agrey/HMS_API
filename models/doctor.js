const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const doctorSchema=new Schema({
    name: {type: String, required: true},
    address: String,
    email: String,
    contact: String,
    speciality: String,
    available_hrs: String
})

const Doctor=mongoose.model('doctor', doctorSchema);

module.exports=Doctor;