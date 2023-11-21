let CartDiv = document.querySelector('.divCart')
let cart = JSON.parse(localStorage.getItem('cart')) || []
const reloadCart = () => {
	CartDiv.innerHTML = ''
	let totalPrice = 0
	let i = 0
	let count = 0
	if (Array.isArray(cart) && cart.length > 0) {
		cart.forEach((value, key) => {
			totalPrice += parseInt(value.newCost) * value.count
			i += 1
			if (value != null) {
				count += value.count
				let newDiv = document.createElement('tr')
				newDiv.classList.add('item')
				newDiv.innerHTML = `

                    <th scope="row">${i}</th>
                    <td>${value.title}</td>
                    <td ><img src="${
											value.img
										}" class="cart-img card-imgs" alt=""></td>
                    <td>
					<div class="item-counter">
						<span class="plus">+</span>
						<span class="num count">${value.count}</span>
						<span class="minus">-</span>
					</div>
					</td>
					<td >${value.size || 0}</td>
					<td>${value.newCost} tg</td>
					<td><button class="btn btn-primary" onclick="removeFromCart(${key})" id="liveToastBtn">Remove</button>
				`
				CartDiv.appendChild(newDiv)
			}
			const countdiv = document.querySelector('.countDiv')
			const totaldiv = document.querySelector('.totalDiv')
			countdiv.innerHTML = `In the basket ` + count + ' items'
			totaldiv.innerHTML = 'Total price: ' + totalPrice + ' tg'
		})
	} else {
		let newDiv = document.createElement('tr')
		newDiv.innerHTML = `Cart empty`
		CartDiv.appendChild(newDiv)
		const countdiv = document.querySelector('.countDiv')
		const totaldiv = document.querySelector('.totalDiv')
		countdiv.innerHTML = 0
		totaldiv.innerHTML = 0
	}
}
function removeFromCart(itemId) {
	cart.splice(itemId, 1)
	localStorage.setItem('cart', JSON.stringify(cart))
	alerttext('Product removed!', 3000)
	updateCartCount()
	reloadCart()
}
function addEventListeners() {
	const assets = document.querySelectorAll('.item')

	assets.forEach((asset, index) => {
		const plus = asset.querySelector('.plus')
		const minus = asset.querySelector('.minus')
		const num = asset.querySelector('.num')

	plus.addEventListener('click', () => {
			let currentNum = parseInt(num.innerText, 10)
			if (currentNum < 99) {
				currentNum++
				num.innerText = currentNum.toString()
				cart[index].count = currentNum
				localStorage.setItem('cart', JSON.stringify(cart))
			}
		})

		minus.addEventListener('click', () => {
			let currentNum = parseInt(num.innerText, 10)
			if (currentNum > 1) {
				currentNum--
				num.innerText = currentNum.toString()
				cart[index].count = currentNum
				localStorage.setItem('cart', JSON.stringify(cart))
			}
		})
	})
}
window.addEventListener('load', () => {
	addEventListeners()
})
reloadCart()
