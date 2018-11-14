/*

Mateus Israel, 13 de novembro de 2018
Aprendendo Node Js

*/


const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h2> Olá Mundo </h2>');
}).listen(3000);


console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');


/*

var http = require('http');

var server = http.createServer();

server.on('request', function(req,res) { 
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h2> Olá mundo! </h2>');
});

server.listen(3000);

console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…’);

*/


/*
Da forma acima, podemos ver claramente a maneira em que o Node.js opera para servir a
sua página. Utilizamos o método on do nosso objeto server para ouvir ao evento request
e fazer as operações. E definimos que estamos servindo na porta 3000.
*/