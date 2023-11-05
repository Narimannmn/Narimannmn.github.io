const MenProductDiv = document.querySelector('.MenProductDiv')
let MenProducts = [
	{
		discount: '-50%',
		img: 'images/m1.jpg',
		title: 'EMPORIO ARMANI',
		productCategory: 'Hats',
		newCost: 47500,
		oldCost: 94990,
	},
	{
		discount: '0-0-4',
		img: 'images/m2.jpg',
		title: 'EMPORIO ARMANI',
		productCategory: 'Hats',
		newCost: 74990,
		oldCost: 74990,
	},
	{
		discount: '0-0-4',
		img: 'images/m3.jpg',
		title: 'ADIDAS',
		productCategory: 'Hats',
		newCost: 14990,
		oldCost: 14990,
	},
	{
		discount: '0-0-4',
		img: 'images/m4.jpg',
		title: 'GUESS',
		productCategory: 'Hats',
		newCost: 22990,
		oldCost: 22990,
	},
	{
		discount: '-60%',
		img: 'images/m5.jpg',
		title: 'EMPORIO ARMANI',
		productCategory: 'Tops',
		newCost: 17600,
		oldCost: 43990,
	},
	{
		discount: '-60%',
		img: 'images/m6.jpg',
		title: 'ARMANI EXCHANGE',
		productCategory: 'Tops',
		newCost: 40400,
		oldCost: 100990,
	},
	{
		discount: '0-0-4',
		img: 'images/m7.jpg',
		title: 'LEE',
		productCategory: 'Tops',
		newCost: 19990,
		oldCost: 19990,
	},
	{
		discount: '0-0-4',
		img: 'images/m8.jpg',
		title: 'ARMANI EXCHANGE',
		productCategory: 'Tops',
		newCost: 75990,
		oldCost: 75990,
	},
	{
		discount: '-70%',
		img: 'images/m9.jpg',
		title: 'THE NORTH FACE',
		productCategory: 'Underwear',
		newCost: 9000,
		oldCost: 29990,
	},
	{
		discount: '-70%',
		img: 'images/m10.jpg',
		title: 'JUST CAVALLI',
		productCategory: 'Underwear',
		newCost: 43800,
		oldCost: 92990,
	},
	{
		discount: '-60%',
		img: 'images/m11.jpg',
		title: 'EA7',
		productCategory: 'WRANGLER',
		newCost: 16400,
		oldCost: 40990,
	},
	{
		discount: '-70%',
		img: 'images/m12.jpg',
		title: 'LEE',
		productCategory: 'Underwear',
		newCost: 7200,
		oldCost: 23990,
	},
	{
		discount: '60%',
		img: 'images/m13.jpg',
		title: 'ADIDAS',
		productCategory: 'Sneakers for the city',
		newCost: 26000,
		oldCost: 64990,
	},
	{
		discount: '-60%',
		img: 'images/m14.jpg',
		title: 'ADIDAS',
		productCategory: 'Sneakers for the city',
		newCost: 33200,
		oldCost: 82990,
	},
	{
		discount: '-60%',
		img: 'images/m15.jpg',
		title: 'TESORO',
		productCategory: 'Sneakers for the city',
		newCost: 14000,
		oldCost: 34990,
	},
	{
		discount: '-60%',
		img: 'images/m16.jpg',
		title: 'ECCO',
		productCategory: 'Sneakers for the city',
		newCost: 33600,
		oldCost: 83990,
	},
	{
		discount: '-60%',
		img: 'images/m16.jpg',
		title: 'ECCO',
		productCategory: 'Sneakers for the city',
		newCost: 33600,
		oldCost: 83990,
	},
	{
		discount: '-60%',
		img: 'images/m16.jpg',
		title: 'ECCO',
		productCategory: 'Sneakers for the city',
		newCost: 33600,
		oldCost: 83990,
	},
	{
		discount: '-60%',
		img: 'images/m16.jpg',
		title: 'ECCO',
		productCategory: 'Sneakers for the city',
		newCost: 33600,
		oldCost: 83990,
	}
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
				<a class="btn btn-primary" onclick="addToCart(${key})">Shopping cart</a>
			</div>
		</div>
		`
		divSelector.appendChild(newDiv)
	
	})
}
const message = document.querySelector('.message')
function alerttext(text, timeout, type = 'success') {
	message.innerHTML = `
            <div class="alert alert-${type}" role="alert">
                    ${text}
                </div>
            `
	setTimeout(() => {
		message.innerHTML = ''
	}, timeout)
}
function addToCart(product) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	cart.push(MenProducts[product])
	localStorage.setItem('cart', JSON.stringify(cart))
	alerttext('Product added!', 3000)
}
initApp(MenProducts, MenProductDiv)
