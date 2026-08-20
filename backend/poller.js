const { updateStockCache } = require('./cache');

async function pollWarehouse() {
    try {
        const response = await fetch(
            'http://localhost:5000/warehouse/products'
        );

        if (!response.ok) {
            throw new Error(`Warehouse API returned ${response.status}`);
        }

        const data = await response.json();

        updateStockCache(data.products);

        console.log(
            `[${new Date().toISOString()}] Warehouse stock cache updated.`
        );
    } catch (error) {
        console.error('Warehouse polling failed:', error.message);
    }
}

pollWarehouse();

setInterval(pollWarehouse, 5 * 60 * 1000);

module.exports = {
    pollWarehouse
};