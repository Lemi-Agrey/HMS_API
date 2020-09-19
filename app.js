const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
const patientsRoute=require('./routes/patients')
const doctorsRoute=require('./routes/doctors')


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/hospital',{ useUnifiedTopology: true }, { useNewUrlParser: true });

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/patients', patientsRoute);
app.use('/doctors', doctorsRoute)

//check for 404 error and forwarding to the error handler
app.use((req, res, next)=>{
    const err= new Error('Not found');
    err.status=404;
    next(err)
})

app.use((err, req, res, next)=>{
    const error=app.get('dev')==='development' ? err : {}
    const status=err.status || 500;
    res.status(status).json({
        error: {
            message: error.message
        }
    })
})

const port=app.get('port') || 4000;

app.listen(port, ()=>console.log(`The Server is running on ${port}`));




