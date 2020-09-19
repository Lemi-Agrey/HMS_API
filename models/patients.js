const { number } = require('joi');
const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const patientSchema=new Schema({
    name: {type: String, required: true},
    weight: Number,
    height: Number,
    gender: String,
    birthDate: Number,
    maritalStatus: String,
    isSmoking: String,
    isDrinking: String,
    homeAddress: String,
    telephone: String,
    emergCont: String,
    mobile: String,
    allegies: String,
    bloodGroup: String,
    doctors: {type:Schema.Types.ObjectId, ref: 'doctor'}

})

const Patient=mongoose.model('patient', patientSchema);

module.exports=Patient;