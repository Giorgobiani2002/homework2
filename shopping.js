class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(itemName, quantity, price) {
        this.items.push({ itemName, quantity, price });
    }

    deleteItem(itemName) {
        this.items = this.items.filter(item => item.itemName !== itemName);
    }

    updateItem(itemName, quantity) {
        for (const item of this.items) {
            if (item.itemName === itemName) {
                item.quantity = quantity;
            }
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.quantity * item.price, 0);
    }
}


const cart = new ShoppingCart();
cart.addItem('marwyvi', 2, 3);
cart.addItem('banani', 3, 1);
console.log(cart.calculateTotal());
