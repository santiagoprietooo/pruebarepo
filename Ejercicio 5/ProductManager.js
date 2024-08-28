class ProductManager {    
    products = [];
    constructor(products){
        this.products = products;
    }

    addProduct(product){
        this.products.push(product);
    }
    getProducts(){
        return this.products;
    }
    getProductById(id){
        const product = this.products.find(product => product.id === id)
        if(product){
            console.log('Producto encontrado: ', product);
        } else {
            console.error('No se encontró el producto con el ID:', id);
            return null;
        }
    }
}

module.exports = ProductManager;