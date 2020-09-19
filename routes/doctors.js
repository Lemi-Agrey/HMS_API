const express=require('express');
const router=require('express-promise-router')();
const doctorController=require('../controller/doctors');

router.route('/')
.get(doctorController.getDoctors)
.post(doctorController.addDoctor)
.delete(doctorController.deleteDoctor)

router.route('/:doctorId')
.get(doctorController.getAdoctor)
.put(doctorController.upDateDocter)

module.exports=router;