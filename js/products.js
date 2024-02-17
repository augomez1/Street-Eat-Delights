let products = [
	{
		id: 1,
		name: 'French Fries',
		image: 'fries.png',
		price: 20.00
	},
	{
		id: 2,
		name: 'Burger',
		image: 'burger.PNG',
		price: 25.00
	},
	{
		id: 3,
		name: 'Kwek-Kwek(1)',
		image: 'kwek-kwek.PNG',
		price: 12.00
	},
	{
		id: 4,
		name: 'Squid Ball(2)',
		image: 'squid balls.PNG',
		price: 12.00
	},
	{
		id: 5,
		name: 'Fish Ball(8pcs)',
		image: 'fball1.PNG',
		price: 10.00
	},
	{
		id: 6,
		name: 'Kikiam(5)',
		image: 'kikiam.PNG',
		price: 12.00
	},
	{
		id: 7,
		name: 'Cheesy Cheesesticks(6)',
		image: 'cheesesticks.png',
		price: 15.00
	},
	{
		id: 8,
		name: 'Overload Pizza(1)',
		image: 'pizzzza.png',
		price: 15.00
	},
	{
		id: 9,
		name: 'Street Lasagna(1)',
		image: 'lsgna.png',
		price: 50.00
	},
	{
		id: 10,
		name: 'Pancake in Choco Syrup(2)',
		image: 'pancakes.png',
		price: 30.00
	},
	{
		id: 11,
		name: 'Refreshing Drink(12oz)',
		image: 'drinksbundle.png',
		price: 15.00
	},
	{
		id: 12,
		name: 'Bread Lovers(2)',
		image: 'breads.png',
		price: 25.00
	},
];



//The way how the products are displayed in product-shop.html

let listCards = [];
function initApp(){
	products.forEach((value, key)=>{
		let newDiv = document.createElement('div');
		newDiv.classList.add('item');
		newDiv.innerHTML = `
			<img src="images/${value.image}" width="100" height="250"/>
			<div class="title">${value.name}</div>
			<div class="price">${value.price.toLocaleString()}</div>
			<button onclick="addToCard(${key})">Add To Card</button>
		`;
		list.appendChild(newDiv);
	})
}