let openShopping = document.querySelector('.Shopping');
let closeShopping = document.querySelector('.closeShopping');
let checkoutButton = document.querySelector('.button');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

//Para magpakita yung shop menu, to see kung ano nakalagay

openShopping.addEventListener('click', ()=>{
	body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
	body.classList.remove('active');
})



initApp();
function addToCard(key){
	if(listCards[key] == null){
		listCards[key] = products[key];
		listCards[key].quantity = 1;
		prices = products[key].price;
	}
	reloadCard();
}


openCheckout.addEventListener('click', ()=>{
	body.classList.openCheckout('active');
})
