const Doctor=require('../models/doctor')

module.exports={
    //add a new doctor record
    addDoctor:async(req, res, next)=>{
        const newDoctor=new Doctor(req.body);
        const results=await newDoctor.save(newDoctor)
        res.status(200).json(results);
    },
    //get doctors records
    getDoctors:(req, res, next)=> {
         Doctor.find({})
         .then(doctors=>{
            res.status(200).json(doctors)
         })
         .catch(err=>{
             err.status(500).json({
                 message: 'failed to find data'
             })
         })
        
    },
    //get single doctor record
    getAdoctor: async(req, res, next)=>{
        const {doctorId}=req.params;
        const doct=await Doctor.findById(doctorId)
        res.status(200).json(doct)
    },
    //update a doctor's record
    upDateDocter: async(req, res, next)=>{
        const {doctorId}=req.params;
        const newDoc=req.body;
        const result=await Doctor.findByIdAndUpdate(doctorId, newDoc);
        res.status(200).json(result);
    },
    //Delete a doctor's record
    deleteDoctor: async(req, res, next)=>{
        const {doctorId}=req.params;
        const bod=req.body;
        const result=await Doctor.findByIdAndRemove(doctorId, bod);
        res.status(200).json(result)
    }
}

