function reloadCard(){
	listCard.innerHTML = '';
	let count = 0;
	let totalPrice = 0;
	listCards.forEach((value, key) => {
		totalPrice = totalPrice + value.price;
		count = count + value.quantity;

// Quantity modifier. Adding zero will result in removal of the product to the list.

		if(value != null){
			let newDiv = document.createElement('li');
			newDiv.innerHTML = `
				<div><img src="images/${value.image}"/></div>
				<div>${value.name}</div>
				<div>${value.price.toLocaleString()}</div>
				<div>
					<button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
					<div class="count">${value.quantity}</div>
					<button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
				</div>
			`;
			listCard.appendChild(newDiv);
		}
	})
	total.innerText = totalPrice.toLocaleString();
	quantity.innerText = count;
}
function changeQuantity(key, quantity){
	if(quantity == 0){
		delete listCards[key]
	}else{
		listCards[key].quantity = quantity;
		listCards[key].price = quantity * prices;
	}
	reloadCard();
}



