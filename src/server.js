//importar dependência
const express = require('express');
const path = require('path');

//iniciando a biblioteca express
const server = express();

server
    //utilizando arquivos estáticos 
    .use(express.static('public'))

    //criar rota
    .get('/', (request, response) => {
        return response.sendFile(path.join(__dirname, 'views', 'index.html'));
    })

//ligar o servidor
server.listen(5500);