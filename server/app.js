const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Calisan');

const Calisan = mongoose.model('calisan');

const PORT = 3333;
const mongoURL = 'mongodb+srv://legend:z2LR2KRWEANtY1cB@empapp-iakgh.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("MongoDB bağlantı başarılı!");
})

mongoose.connection.on('error',(err)=>{
    console.log("MongoDB bağlantı başarısız: ",err);
})

app.get('/',(req,res) => {
    res.send("Node js e hoşgeldin");
})

app.listen(PORT,()=>{
    console.log(`Sunucu ${PORT} portunda yayında`);
})

