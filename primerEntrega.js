class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(productData) {
        const { title, description, price, thumbnail, code, stock } = productData;

        const existingProduct = this.products.find((product) => product.code === code);

        if (existingProduct) {
            throw new Error("El producto con el mismo código ya existe.");
        }

        const id = this.generateUniqueId();

        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);

        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);

        if (!product) {
            throw new Error("Producto no encontrado.");
        }

        return product;
    }

    generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

try {
    const newProduct = productManager.addProduct({
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25,
    });

    console.log("Producto agregado:", newProduct);
} catch (error) {
    console.error("Error al agregar producto:", error.message);
}

console.log(productManager.getProducts());

try {
    productManager.addProduct({
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25,
    });
} catch (error) {
    console.error("Error al agregar producto duplicado:", error.message);
}

try {
    const productId = productManager.getProducts()[0].id;
    const foundProduct = productManager.getProductById(productId);
    console.log("Producto encontrado por ID:", foundProduct);
} catch (error) {
    console.error("Error al buscar producto por ID:", error.message);
}
