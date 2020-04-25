const mongoose = require('mongoose');

const CalisanSema = new mongoose.Schema({
    phone:String, 
    url:String,
    name:String, 
    position:String, 
    email:String, 
    salary:String,
});

mongoose.model('calisan', CalisanSema);