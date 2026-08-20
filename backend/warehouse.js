const http = require('http');
const productsData = require('./data/products.json');

const server = http.createServer((req, res) => {
    if (req.url === '/warehouse/products' && req.method === 'GET') {
        const products = productsData.products.map(product => ({
            product_id: product.product_id,
            product_name: product.product_name,
            price: product.price,
            in_stock: product.in_stock,
            stock_count: product.stock_count
        }));

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({ products }));
        return;
    }

    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        error: 'Endpoint not found'
    }));
});

server.listen(5000, () => {
    console.log('Warehouse API running at http://localhost:5000');
});