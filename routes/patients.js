const express=require('express');
const router=require('express-promise-router')()
const patientsController=require('../controller/patients');

router.route('/')
.get(patientsController.getPatients)
.post(patientsController.addPatient)

router.route('/:patientId')
.get(patientsController.getPatient) 
.put(patientsController.editPatient)



module.exports=router;