const { required } = require('joi');
const express=require('mongoose');

const Schema=mongoose.Schema;

const testSchema=new Schema({
    name: String,
    duration: String,
    testResult: String,
    patients:{type:Schema.Types.ObjectId, ref: 'patient', required:true},
    lab_tech: {type:Schema.Types.ObjectId, ref: 'user'}
})

const Test=mongoose.model('test', testSchema)

module.exports=Test;