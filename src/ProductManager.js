class ProductManager {
    constructor() {
        this.products = require('./products.json');
    }

    getProducts(limit) {
        if (limit) {
            return this.products.slice(0, parseInt(limit));
        } else {
            return this.products;
        }
    }

    getProductById(productId) {
        return this.products.find((product) => product.id === productId);
    }
}

module.exports = ProductManager;
