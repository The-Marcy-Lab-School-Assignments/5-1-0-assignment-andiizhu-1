import getId from "../utils/getId";
import CartItem from "./CartItem";

let getId = () => {
	id++;
};
let id = 0;

class ShoppingCart {
	#cartItems = [];
	static #allCarts = [];
	constructor(id) {
		this.id = getId();
		ShoppingCart.#allCarts.push(this);
	}
	createItem(name, price) {
		const cartItem = new CartItem(name, price);
		this.#cartItems.push(cartItem);
		return cartItem;
	}
	getItems() {
		return [...this.#cartItems];
	}
	getTotal() {
		return this.#cartItems.reduce((a, b) => a + b.price, 0);
	}
	removeItem(id) {
		this.#cartItems.splice(
			this.#cartItems.findIndex((cartItem) => cartItem.id === id),
			1
		);
	}
	static listAll() {
		return [...ShoppingCart.#allCarts];
	}
	static findBy(id) {
		return ShoppingCart.#allCarts.find((cart) => cart.id === id);
	}
}

export default ShoppingCart;
