let stockCache = [];

function getStockCache() {
    return stockCache;
}

function updateStockCache(products) {
    stockCache = products;
}

module.exports = {
    getStockCache,
    updateStockCache
};