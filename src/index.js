const express = require('express');

const app = express();

app.listen(3333);

app.get('/',(require, response) =>{
    return response.send('Olá, professor');
});