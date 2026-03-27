const http = require('node:http');
const fs = require('node:fs/promises');

http.createServer((req, res) => {
    fs.readFile("./no-file.txt").catch((e) => {
        console.error("error");
    });
    res.writeHead(200);
    res.end("👋");
}).listen(8080);
