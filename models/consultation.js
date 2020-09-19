const mongoose=required('mongoose');

const Schema=mongoose.Schema;

const consultSchema=new Schema({
    patients: {type:Schema.Types.ObjectId, ref:'patient'},
    
})

const Constultation=mongoose.model('consultation', consultSchema)
module.exports=Constultation;