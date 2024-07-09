import getId from "../utils/getId";

let getId = () => {
	id++;
};
let id = 0;
class CartItem {
	constructor(name, price) {
		this.name = name;
		this.price = price;
		this.id = getId();
	}
}

export default CartItem;
