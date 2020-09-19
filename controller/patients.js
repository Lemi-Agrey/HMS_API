const Patient=require('../models/patients');

module.exports={
    //add a patient
    addPatient: async(req, res, next)=>{
        const newPatient= new Patient(req.body);
        const user= await newPatient.save()
        res.status(200).json(user);   
        
    },
    //get the patients details
    getPatients: async(req, res, next)=>{
        const patients = await Patient.find({})
        const response={
            count: patients.length,
            patient:  patients
        }
        res.status(200).json(patients);
    },
    //editing patients details
    editPatient: async(req, res, next)=>{
        const {patientId}=req.params;
        const updatePatient=req.body;                                                                  `TA`
        const result=await Patient.findByIdAndUpdate(patientId, updatePatient);
        res.status(200).json(result)
    },
    //getting a single patient by id
    getPatient: async(req, res, next)=>{
        const {patientId}=req.params;
        const results=await Patient.findById(patientId);
        res.status(200).json(results);
    }
}

