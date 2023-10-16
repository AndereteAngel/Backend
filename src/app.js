const express = require('express');
const app = express();
const port = 3000;

const ProductManager = require('./ProductManager');
const productManager = new ProductManager();

app.get('/products', async (req, res) => {
    const limit = req.query.limit;
    try {
        const products = productManager.getProducts(limit);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.get('/products/:pid', async (req, res) => {
    const productId = parseInt(req.params.pid);
    try {
        const product = productManager.getProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});
