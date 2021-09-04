const express=require('express');
const env=require('dotenv');
const app=express();

app.get('/',(req,res,next)=>{

    res.status(200).json({
        message: 'Hello Express from Server'
    });
 
});



env.config();
app.listen(process.env.PORT, ()=>{
    console.log(`Server Running PORT ${process.env.PORT}`);
});