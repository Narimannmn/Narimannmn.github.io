const WomenProductDiv = document.querySelector('.WomenProductDiv')
let WomenProducts = [
	{
		discount: '-60%',
		img: ['images/w1.jpg', 'images/w1.1.jpg', 'images/w1.2.jpg'],
		title: 'JUST CAVALLI',
		productCategory: 'Hats',
		newCost: 13200,
		oldCost: 32990,
	},
	{
		discount: '-10%',
		img: ['images/w2.jpg', 'images/w2.1.jpg'],
		title: 'TOMMY HILFIGER',
		productCategory: 'Hats',
		newCost: 23990,
		oldCost: 26000,
	},
	{
		discount: '-60%',
		img: ['images/w3.jpg', 'images/w3.1.jpg', 'images/w3.2.jpg'],
		title: 'BRASKA',
		productCategory: 'Hats',
		newCost: 4000,
		oldCost: 9990,
	},
	{
		discount: '-60%',
		img: ['images/w4.jpg', 'images/w4.1.jpg', 'images/w4.2.jpg'],
		title: 'THE NORTH FACE',
		productCategory: 'Hats',
		newCost: 8000,
		oldCost: 19990,
	},
	{
		discount: '-30%',
		img: ['images/w5.jpg', 'images/w5.1.jpg'],
		title: 'ARMANI EXCHANGE',
		productCategory: 'Tops',
		newCost: 67990,
		oldCost: 99000,
	},
	{
		discount: '-60%',
		img: ['images/w6.jpg', 'images/w6.1.jpg', 'images/w6.2.jpg'],
		title: 'EMPORIO ARMANI',
		productCategory: 'Tops',
		newCost: 91600,
		oldCost: 228990,
	},
	{
		discount: '-60%',
		img: ['images/w7.jpg', 'images/w7.1.jpg'],
		title: 'EMPORIO ARMANI',
		productCategory: 'Tops',
		newCost: 40000,
		oldCost: 99990,
	},
	{
		discount: '-60%',
		img: ['images/w8.jpg', 'images/w8.1.jpg', 'images/w8.2.jpg'],
		title: 'EA7',
		productCategory: 'Tops',
		newCost: 16000,
		oldCost: 39990,
	},
	{
		discount: '-28%',
		img: ['images/w9.jpg', 'images/w9.1.jpg', 'images/w9.2.jpg'],
		title: 'ARMANI EXCHANGE',
		productCategory: 'Underwear',
		newCost: 60470,
		oldCost: 83990,
	},
	{
		discount: '-10%',
		img: ['images/w10.jpg', 'images/w10.1.jpg'],
		title: 'ARMANI EXCHANGE',
		productCategory: 'Underwear',
		newCost: 83690,
		oldCost: 92990,
	},
	{
		discount: '-10%',
		img: ['images/w11.jpg', 'images/w11.1.jpg'],
		title: 'EA7',
		productCategory: 'Underwear',
		newCost: 53990,
		oldCost: 63990,
	},
	{
		discount: '-70%',
		img: ['images/w12.jpg', 'images/w12.1.jpg'],
		title: "MARC O'POLO",
		productCategory: 'Underwear',
		newCost: 11400,
		oldCost: 37990,
	},
	{
		discount: '-5%',
		img: ['images/w13.jpg', 'images/w13.1.jpg', 'images/w13.2.jpg'],
		title: 'EA7',
		productCategory: 'Sneakers for the city',
		newCost: 111990,
		oldCost: 121990,
	},
	{
		discount: '-44%',
		img: ['images/w14.jpg', 'images/w14.1.jpg', 'images/w14.2.jpg'],
		title: 'TIMBERLAND',
		productCategory: 'Sneakers for the city',
		newCost: 25750,
		oldCost: 45990,
	},
	{
		discount: '-60%',
		img: ['images/w15.jpg', 'images/w15.1.jpg', 'images/w15.2.jpg'],
		title: 'BRASKA',
		productCategory: 'Sneakers for the city',
		newCost: 19600,
		oldCost: 48990,
	},
	{
		discount: '-60%',
		img: ['images/w16.jpg', 'images/w16.1.jpg', 'images/w16.2.jpg'],
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
      <div class="card">
        <div id="carousel-${key}" class="carousel slide">
          <div class="carousel-inner">
            ${value.img
							.map(
								(img, index) => `
              <div class="carousel-item${index === 0 ? ' active' : ''}">
                <img src="${img}" class="card-img-top card-imgs" alt="...">
              </div>
            `
							)
							.join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${key}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel-${key}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <p class="card-text product-category" style="color: grey;">${
						value.productCategory
					}</p>
          <p class="card-text"><span class="discount">${
						value.discount
					}</span></p>
          <p class="card-text"><span class="new-cost">${
						value.newCost
					}</span><span class="old-cost">${value.oldCost}</span></p>
          <a class="btn btn-primary" onclick="addToCart(${key})">Shopping cart</a>
        </div>
      </div>
    `
		divSelector.appendChild(newDiv)
	})
}

function addToCart(product) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	let item = {
		discount: WomenProductsProducts[product].discount,
		img: Array.isArray(WomenProducts[product].img)
			? WomenProducts[product].img[0]
			: MenProducts[product].img,
		title: WomenProducts[product].title,
		productCategory: WomenProducts[product].productCategory,
		newCost: WomenProducts[product].newCost,
		oldCost: WomenProducts[product].oldCost,
		count: 1,
	}
	cart.push(item)
	localStorage.setItem('cart', JSON.stringify(cart))
	updateCartCount()
	alerttext('Product added!', 3000)
}
initApp(WomenProducts, WomenProductDiv)
