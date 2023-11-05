document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('input', function (event) {
		const searchInput = document.querySelector('#search-item')
		if (event.target === searchInput) {
			search()
		}
	})
})

function search() {
    const searchInput = document.querySelector('#search-item').value.toLowerCase();
    const products = document.querySelectorAll('.card');
	const productList = document.querySelector('.product-list')
	productList.innerHTML = ''
    products.forEach(item => {
        const productContent = item.textContent.toLowerCase();

        if (searchInput === '') {
			item.closest('.col').style.border = 'none'
			productList.innerHTML = ''
			productList.style.display = 'none'
		} else if (productContent.includes(searchInput)) {
			item.closest('.col').style.border = '3px dashed green'
			productList.style.display = 'block'
			let newDiv = document.createElement('div')
			newDiv.classList.add('product')
			newDiv.innerHTML =`
			<a onclick="scroll()">${
				item.querySelector('.card-title').textContent
			}</a>`
			productList.appendChild(newDiv)
			item.scrollIntoView({ block: 'center', behavior: 'smooth' })
			
			
		} else {
			item.closest('.col').style.border = 'none'
		}
    })
}


function filter(searchInput) {
	searchInput = searchInput.toLowerCase()
	const products = document.querySelectorAll('.card')
	products.forEach(item => {
		let text = item.textContent
		if (text.toLowerCase().includes(searchInput)) {
			item.closest('.col').style.display = 'block'
		} else {
			item.closest('.col').style.display = 'none'
		}
	})
}
// function scroll(){
// 	console.log("dasasd")
// }
