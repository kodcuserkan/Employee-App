const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Calisan');

app.use(bodyParser.json());

const Calisan = mongoose.model('calisan');

const PORT = 3333;
const mongoURL = 'mongodb+srv://legend:z2LR2KRWEANtY1cB@empapp-iakgh.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("MongoDB bağlantı başarılı!");
})

mongoose.connection.on('error', (err) => {
    console.log("MongoDB bağlantı başarısız: ", err);
})

app.get('/', (req, res) => {
    Calisan.find({}).then(data => {
        res.send(data)
    }).catch(err => console.log("Hata : ",err));
})

app.post('/send-data', (req, res) => {

    const eleman = new Calisan({
        name: req.body.name,
        phone: req.body.phone,
        url: req.body.url,
        position: req.body.position,
        email: req.body.email,
        salary: req.body.salary
    })

    eleman.save().then(
        data => {
            console.log(data);
            res.send(data);
        }
    ).catch(err => {
        console.log("Hata : ", err);
    })
})

app.post('/delete', (req, res) => {
    Calisan.findByIdAndDelete(req.body.id)
        .then(data => {
            console.log("Silinen: ", data);
            res.send(data)
        })
        .catch(err => { console.log("Hata: ", err) });
})

app.post('/update', (req, res) => {
    Calisan.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        phone: req.body.phone,
        url: req.body.url,
        position: req.body.position,
        email: req.body.email,
        salary: req.body.salary,
    }).then(data => {
        console.log("Güncellenen: ", data);
        res.send(data)
    }).catch(err =>{
        console.log("Hata : ",err)
    })
})

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda yayında`);
})
