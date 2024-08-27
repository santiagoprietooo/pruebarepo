const http = require('http');
const ProductManager = require('./ProductManager');

const port = 3000;

const productos = [
    {
        id: 1,
        titulo: "Pelota",
        descripcion: "Pelota para jugar al futbol.",
        precio: 3000
    },
    {
        id: 2,
        titulo: "Camiseta",
        descripcion: "Camiseta de futbol de la seleccion.",
        precio: 23000
    }
];

const manager = new ProductManager(productos);

const server = http.createServer((request, response) => {
    const url = request.url;

    if (url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Bienvenido al inicio!');
    } else if (url === '/products') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(JSON.stringify(manager.getProducts()));
    } else if (url.startsWith('/products/')) {
        const id = url.split('/')[2];
        const productId = manager.getProductById(parseInt(id));
        // se muestra el id por consola solamente, no por el servidor web.

        if (productId) {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end(JSON.stringify(productId));
        } else {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Error 404, este producto no existe.');
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Error 404, esta pagina no existe.');
    }
});

server.listen(port, () => {
    console.log('Servidor web corriendo en el puerto', port);
});