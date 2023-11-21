const MenProductDiv = document.querySelector('.MenProductDiv')
let MenProducts = [
	{
		discount: '-50%',
		img: ['images/m1.jpg', 'images/m1.1.jpg'],
		title: 'EMPORIO ARMANI',
		productCategory: 'Hats',
		newCost: 47500,
		oldCost: 94990,
	},
	{
		discount: '-10%',
		img: ['images/m2.jpg', 'images/m2.1.jpg', 'images/m2.2.jpg'],
		title: 'EMPORIO ARMANI',
		productCategory: 'Hats',
		newCost: 74990,
		oldCost: 84990,
	},
	{
		discount: '-10%',
		img: ['images/m3.jpg', 'images/m3.1.jpg', 'images/m3.2.jpg'],
		title: 'ADIDAS',
		productCategory: 'Hats',
		newCost: 14990,
		oldCost: 15990,
	},
	{
		discount: '-10%',
		img: ['images/m4.jpg', 'images/m4.1.jpg'],
		title: 'GUESS',
		productCategory: 'Hats',
		newCost: 22990,
		oldCost: 32990,
	},
	{
		discount: '-60%',
		img: ['images/m5.jpg', 'images/m5.1.jpg'],
		title: 'EMPORIO ARMANI',
		productCategory: 'Tops',
		newCost: 17600,
		oldCost: 43990,
	},
	{
		discount: '-60%',
		img: ['images/m6.jpg', 'images/m6.1.jpg', 'images/m6.2.jpg'],
		title: 'ARMANI EXCHANGE',
		productCategory: 'Tops',
		newCost: 40400,
		oldCost: 100990,
	},
	{
		discount: '-10%',
		img: ['images/m7.jpg', 'images/m7.1.jpg'],
		title: 'LEE',
		productCategory: 'Tops',
		newCost: 19990,
		oldCost: 20990,
	},
	{
		discount: '-10%',
		img: ['images/m8.jpg', 'images/m8.1.jpg', 'images/m8.2.jpg'],
		title: 'ARMANI EXCHANGE',
		productCategory: 'Tops',
		newCost: 75990,
		oldCost: 76990,
	},
	{
		discount: '-70%',
		img: ['images/m9.jpg', 'images/m9.1.jpg'],
		title: 'THE NORTH FACE',
		productCategory: 'Underwear',
		newCost: 9000,
		oldCost: 29990,
	},
	{
		discount: '-70%',
		img: ['images/m10.jpg', 'images/m10.1.jpg', 'images/m10.2.jpg'],
		title: 'JUST CAVALLI',
		productCategory: 'Underwear',
		newCost: 43800,
		oldCost: 92990,
	},
	{
		discount: '-60%',
		img: ['images/m11.jpg', 'images/m11.1.jpg', 'images/m11.2.jpg'],
		title: 'EA7',
		productCategory: 'Underwear',
		newCost: 16400,
		oldCost: 40990,
	},
	{
		discount: '-70%',
		img: ['images/m1.jpg', 'images/m12.1.jpg', 'images/m12.2.jpg'],
		title: 'LEE',
		productCategory: 'Underwear',
		newCost: 7200,
		oldCost: 23990,
	},
	{
		discount: '60%',
		img: ['images/m13.jpg', 'images/m13.1.jpg', 'images/m13.2.jpg'],
		title: 'ADIDAS',
		productCategory: 'Sneakers for the city',
		newCost: 26000,
		oldCost: 64990,
	},
	{
		discount: '-60%',
		img: ['images/m14.jpg', 'images/m14.1.jpg', 'images/m14.2.jpg'],
		title: 'ADIDAS',
		productCategory: 'Sneakers for the city',
		newCost: 33200,
		oldCost: 82990,
	},
	{
		discount: '-60%',
		img: ['images/m15.jpg', 'images/m15.1.jpg', 'images/m15.2.jpg'],
		title: 'TESORO',
		productCategory: 'Sneakers for the city',
		newCost: 14000,
		oldCost: 34990,
	},
	{
		discount: '-60%',
		img: ['images/m16.jpg', 'images/m16.1.jpg', 'images/m16.2.jpg'],
		title: 'ECCO',
		productCategory: 'Sneakers for the city',
		newCost: 33600,
		oldCost: 83990,
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
			 <div class="col-12 my-2">
        <p>Size:</p>    
        <div class="form-check form-check-inline">
            <input class="form-check-input border border-primary" type="radio" name="inlineCheckbox${
							key + 1
						}" value="S">
            <label class="form-check-label" for="inlineCheckbox${
							key + 1
						}">S</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input border border-primary" type="radio" name="inlineCheckbox${
							key + 1
						}" value="M">
            <label class="form-check-label" for="inlineCheckbox${
							key + 1
						}">M</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input border border-primary" type="radio" name="inlineCheckbox${
							key + 1
						}" value="L">
            <label class="form-check-label" for="inlineCheckbox${
							key + 1
						}">L</label>
        </div>
    </div>

          <a class="btn btn-primary" onclick="addToCart(${key})">Shopping cart</a>
        </div>
      </div>
    `
		divSelector.appendChild(newDiv)
	})
}
function addToCart(product) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	const selectedSize = document.querySelector(
		`input[name="inlineCheckbox${product + 1}"]:checked`
	)
	let item = {
		discount: MenProducts[product].discount,
		img: Array.isArray(MenProducts[product].img)
			? MenProducts[product].img[0]
			: MenProducts[product].img,
		title: MenProducts[product].title,
		productCategory: MenProducts[product].productCategory,
		newCost: MenProducts[product].newCost,
		oldCost: MenProducts[product].oldCost,
		count: 1,
	}
	if (selectedSize) {
		item.size = selectedSize.value
	} else {
		alerttext('Please select a size before adding to the cart', 1500, 'danger')
		return
	}

	let existingItem = cart.find(cartItem => {
		return (
			cartItem.title === item.title &&
			cartItem.productCategory === item.productCategory &&
			cartItem.newCost === item.newCost &&
			cartItem.oldCost === item.oldCost &&
			cartItem.size === item.size
		)
	})
	if (existingItem) {
		existingItem.count += 1
	} else {
		cart.push(item)
	}
	localStorage.setItem('cart', JSON.stringify(cart))
	updateCartCount()
	alerttext('Product added!', 3000)
}
initApp(MenProducts, MenProductDiv)
