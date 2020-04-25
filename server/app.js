const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 3333;
const mongoURL = 'mongodb+srv://legend:z2LR2KRWEANtY1cB@empapp-iakgh.mongodb.net/test?retryWrites=true&w=majority';

app.get('/',(req,res) => {
    res.send("Node js e hoşgeldin");
})

app.listen(PORT,()=>{
    console.log(`Sunucu ${PORT} portunda yayında`);
})