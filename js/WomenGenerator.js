const WomenProductDiv = document.querySelector('.WomenProductDiv')
let WomenProducts = [
	{
		discount: '-60%',
		img: 'images/w1.jpg',
		title: 'JUST CAVALLI',
		productCategory: 'Hats',
		newCost: 13200,
		oldCost: 32990,
	},
	{
		discount: '0-0-4',
		img: 'images/w2.jpg',
		title: 'TOMMY HILFIGER',
		productCategory: 'Hats',
		newCost: 23990,
		oldCost: 26000,
	},
	{
		discount: '-60%',
		img: 'images/w3.jpg',
		title: 'BRASKA',
		productCategory: 'Hats',
		newCost: 4000,
		oldCost: 9990,
	},
	{
		discount: '-60%',
		img: 'images/w4.jpg',
		title: 'THE NORTH FACE',
		productCategory: 'Hats',
		newCost: 8000,
		oldCost: 19990,
	},
	{
		discount: '0-0-4',
		img: 'images/w5.jpg',
		title: 'ARMANI EXCHANGE',
		productCategory: 'Tops',
		newCost: 67990,
		oldCost: 99000,
	},
	{
		discount: '-60%',
		img: 'images/w6.jpg',
		title: 'EMPORIO ARMANI',
		productCategory: 'Tops',
		newCost: 91600,
		oldCost: 228990,
	},
	{
		discount: '-60%',
		img: 'images/w7.jpg',
		title: 'EMPORIO ARMANI',
		productCategory: 'Tops',
		newCost: 40000,
		oldCost: 99990,
	},
	{
		discount: '-60%',
		img: 'images/w8.jpg',
		title: 'EA7',
		productCategory: 'Tops',
		newCost: 16000,
		oldCost: 39990,
	},
	{
		discount: '-28%',
		img: 'images/w9.jpg',
		title: 'ARMANI EXCHANGE',
		productCategory: 'Underwear',
		newCost: 60470,
		oldCost: 83990,
	},
	{
		discount: '-10%',
		img: 'images/w10.jpg',
		title: 'ARMANI EXCHANGE',
		productCategory: 'Underwear',
		newCost: 83690,
		oldCost: 92990,
	},
	{
		discount: '0-0-4',
		img: 'images/w11.jpg',
		title: 'EA7',
		productCategory: 'Underwear',
		newCost: 53990,
		oldCost: 53990,
	},
	{
		discount: '-70%',
		img: 'images/w12.jpg',
		title: "MARC O'POLO",
		productCategory: 'Underwear',
		newCost: 11400,
		oldCost: 37990,
	},
	{
		discount: '0-0-4',
		img: 'images/w13.jpg',
		title: 'EA7',
		productCategory: 'Sneakers for the city',
		newCost: 111990,
		oldCost: 111990,
	},
	{
		discount: '-44%',
		img: 'images/w14.jpg',
		title: 'TIMBERLAND',
		productCategory: 'Sneakers for the city',
		newCost: 25750,
		oldCost: 45990,
	},
	{
		discount: '-60%',
		img: 'images/w15.jpg',
		title: 'BRASKA',
		productCategory: 'Sneakers for the city',
		newCost: 19600,
		oldCost: 48990,
	},
	{
		discount: '-60%',
		img: 'images/w16.jpg',
		title: 'GEOX',
		productCategory: 'Sneakers for the city',
		newCost: 26400,
		oldCost: 65990,
	},
]

let initApp = (arrayX, divSelector) => {
	arrayX.forEach((value, key) => {
		let newDiv = document.createElement('div')
		newDiv.classList.add(
			'col',
			'col-md-6',
			'col-sm-12',
			'col-lg-4',
			'col-xl-3',
			'mb-1'
		)
		newDiv.innerHTML = `
		<div class = "card">
			<span class="discount">${value.discount}</span>
			<img src="${value.img}" class="card-img-top card-imgs" alt="...">
			<div class="card-body">
				<h5 class="card-title">${value.title}</h5>
				<p class="card-text product-category" style="color: grey;">${value.productCategory}</p>
				<p class="card-text"><span class="new-cost">${value.newCost}</span><span class="old-cost">${value.oldCost}</span></p>
				<button class="btn btn-primary" onclick="addToCart(${key})">Shopping cart</button>
			</div>
		</div>
		`
		divSelector.appendChild(newDiv)
	})
}
const message = document.querySelector('.message')
function alerttext(text, timeout) {
	message.innerHTML = `
            <div class="alert alert-success" role="alert">
                    ${text}
                </div>
            `
	setTimeout(() => {
		message.innerHTML = ''
	}, timeout)
}
function addToCart(product) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	cart.push(WomenProducts[product])
	localStorage.setItem('cart', JSON.stringify(cart))
	alerttext("Product added!",3000);
}
initApp(WomenProducts, WomenProductDiv)
