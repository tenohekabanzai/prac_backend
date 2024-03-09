import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/',((req,res)=>{
    res.send('Hello Everynyan!');
}));

app.listen(process.env.port,()=>{
    console.log(`App running on port ${process.env.port}`);
});

