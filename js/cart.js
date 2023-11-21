let CartDiv = document.querySelector('.divCart')
let cart = JSON.parse(localStorage.getItem('cart')) || []
const reloadCart = () => {
	CartDiv.innerHTML = ''
	let totalPrice = 0
	let i = 0
	let count = 0
	if (Array.isArray(cart) && cart.length > 0) {
		cart.forEach((value, key) => {
			totalPrice += parseInt(value.newCost)
			i += 1
			if (value != null) {
				count += value.count
				let newDiv = document.createElement('tr')
				newDiv.innerHTML = `

                    <th scope="row">${i}</th>
                    <td>${value.title}</td>
                    <td ><img src="${value.img}" class="cart-img card-imgs" alt=""></td>
                    <td class = "text-center">${value.count}</td>
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

reloadCart()
