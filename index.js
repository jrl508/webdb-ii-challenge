const server = require('./server');
const port = 9000;

server.listen(port, () => {
    console.log(`The server!? It's on ${port}!?`)
})