const express = require('express');
const app = express();
const path=require('path');

app.use('/static', express.static(__dirname + '/public'));

app.listen(process.env.PORT||3000, ()=>{
    console.log('Servidor funcionando en el puerto:3000');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
