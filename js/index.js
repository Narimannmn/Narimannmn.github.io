// timer code
const promotionEndDate = new Date('2023-11-20T23:59:59')

function updateTimer() {
	const now = new Date()
	const timeRemaining = promotionEndDate - now

	if (timeRemaining <= 0) {
		document.getElementById('countdown').innerHTML = 'Sale is OVER!'
	} else {
		const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

		document.getElementById('countdown').innerHTML = `
                    Until the end of the promotion is left:
                    ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds
                `
	}
}

setInterval(updateTimer, 1000)

window.onload = updateTimer

const cards = document.querySelectorAll('.card')

//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
// slider code
cards.forEach(card => {
	const images = card.querySelectorAll('.image-slider img')
	const prevButton = card.querySelector('.prev-button')
	const nextButton = card.querySelector('.next-button')

	let currentImageIndex = 0

	function showImage(index) {
		images.forEach((image, i) => {
			if (i === index) {
				image.style.display = 'block'
			} else {
				image.style.display = 'none'
			}
		})
	}

	prevButton.addEventListener('click', () => {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length
		showImage(currentImageIndex)
	})

	nextButton.addEventListener('click', () => {
		currentImageIndex = (currentImageIndex + 1) % images.length
		showImage(currentImageIndex)
	})

	showImage(currentImageIndex)
})
//===============================================================================
const salehitdivs = document.querySelector('.sale-hit')
let salehit = [
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
function alerttext(text, timeout, type = 'success') {
	const message = document.querySelector('.message')
	message.innerHTML = `
            <div class="alert alert-${type}" role="alert">
                    ${text}
                </div>
            `
	setTimeout(() => {
		message.innerHTML = ''
	}, timeout)
}
let initApp = (arrayX, divSelector) => {
	arrayX.forEach((value, key) => {
		let newDiv = document.createElement('div')
		newDiv.classList.add('col', 'col-md-3', 'col-sm-6', 'mb-1')

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
		discount: salehit[product].discount,
		img: salehit[product].img[0],
		title: salehit[product].title,
		productCategory: salehit[product].productCategory,
		newCost: salehit[product].newCost,
		oldCost: salehit[product].oldCost,
		count: 1,
	}
	cart.push(item)
	localStorage.setItem('cart', JSON.stringify(cart))
	updateCartCount()
	alerttext('Product added!', 3000)
}
initApp(salehit, salehitdivs)
