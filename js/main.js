document.addEventListener('DOMContentLoaded', function () {
	generateAllContent();
	updateCartCount();
	window.addEventListener('resize', function () {
		generateAllContent()
	})
});

async function generateAllContent() {
	try {
		const navDiv = document.querySelector('.navDiv');
		const footDiv = document.querySelector('.footerDiv');
		const filterDiv = document.querySelector('.filterDiv');
		let navfoot = [
			{
				div: navDiv,
				link: '/navbar.html',
			},
			{
				div: footDiv,
				link: '/footer.html',
			},
			{
				div: filterDiv,
				link: '/filter.html',
			},
		];

		for (const value of navfoot) {
			const res = await fetch(value.link);
			const data = await res.text();

			if (value.div) {
				value.div.innerHTML = data;

				if (value.link === '/navbar.html') {
					generateNavigationalPanel();
				}
			}
		}
	} catch (error) {
		console.error('Error fetching content:', error);
	}
}



function generateNavigationalPanel(){
		let role = sessionStorage.getItem('role') || 0
		const formLink = document.querySelectorAll('.formLink')
		const cartLink = document.querySelectorAll('.cartLink')
		const adminLink = document.querySelectorAll('.adminLink')
		const logoutLink = document.querySelectorAll('.logout')
		const logoutbtn = document.querySelector('.logoutbtn')
		let widthbody = getHTMLWidth()
		let it = getCartCount()

		if (widthbody < 991) {
			if(role == 0){
				formLink.forEach(element => {
					element.innerHTML = `<a href="form.html" style="color: black; text-decoration: none;">Sign in</a>`
				})
				cartLink.forEach(element => {
					element.innerHTML = `<a style="color: black; text-decoration: none;">You need log in<br>to view cart!</a>`
				})
				adminLink.forEach(element => {
					element.closest('li').style.display = 'none'
				})
				logoutLink.forEach(element => {
					element.innerHTML = 'Hello, User!';						
				})
				logoutbtn.style.display = 'none'
			}else{
				formLink.forEach(element => {
					element.closest('li').style.display = 'none'
				})
				cartLink.forEach(element => {
					element.innerHTML = `<a href="cart.html" style="color: black; text-decoration: none;">Cart</a>`
				})
				logoutLink.forEach(element => {
					element.innerHTML = `Hello, ${sessionStorage.getItem('uname')}!`
				})
			}
			
			if (role == 1) {
				adminLink.forEach(element => {
					element.closest('.nav-item').style.display = 'none'
				})
			}
			if (role > 1) {
				adminLink.forEach(element => {
					element.innerHTML = `<a href="admin.html" style="color: black; text-decoration: none;">Admin Panel</a>`
				})
			}
		} else {
			if (role == 0) {
				formLink.forEach(element => {
					element.innerHTML = `<a class="nav-link" href="form.html"><i class="fa-solid fa-user fa-xl"></i></a>`
				})
				cartLink.forEach(element => {
					element.innerHTML = ` <div class="cart-count">${it}</div><a class="nav-link"><i class="fa-solid no-ath-cart fa-cart-shopping fa-xl"><div class="needlogin">Click User Icon to view cart!</div></i></a>`
				})
				adminLink.forEach(element => {
					element.style.display = 'none'
				})
				logoutLink.forEach(element => {
					element.style.display = 'none'
				})
			} else {
				formLink.forEach(element => {
					element.style.display = 'none'
				})
				cartLink.forEach(element => {
					element.innerHTML = ` <div class="cart-count">${it}</div><a class="nav-link"  href="cart.html "><i class="fa-solid fa-cart-shopping fa-xl"></i></a>`
				})
				logoutLink.forEach(element => {
						element.innerHTML = `
				<li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="Mens.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hello, ${sessionStorage.getItem('uname')}!
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="Mens.html" onclick="logout()">Logout</a></li>
                                </ul>
                            </li>
				`
				})
			}
			if (role == 1) {
				adminLink.forEach(element => {
					element.style.display = 'none'
				})
			}
			if (role > 1) {
				adminLink.forEach(element => {
					element.innerHTML = `<a class="nav-link" href="admin.html"><i class="fa-solid fa-lock fa-xl"></i></a>`
				})
			}
		}
		
}
function logout() {
	sessionStorage.setItem('role', 0)
	location.replace('index.html')
}
function getHTMLWidth() {

	return document.body.clientWidth + 17
}

function updateCartCount() {
	let cartCountElements = document.querySelectorAll('.cart-count')
	let cartCount = getCartCount() 
	cartCountElements.forEach(element => {
		element.textContent = cartCount
	})
}
function getCartCount() {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	let count = 0
	cart.forEach(element => {
		count += element.count
	})
	return count
}
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


//
// 	//=============================================
// let imgs = document.querySelectorAll('.card-imgs')
// const modal = document.querySelector('.modalblock')
// imgs.forEach(img => {
// 	img.addEventListener('mouseover', event => {
// 		modal.innerHTML = `
// 				<div class="modal d-block" tabindex="-1">
// 					<div class="modal-dialog bg-primary">
// 						<div class="modal-content">
// 							<div class="modal-body">
// 								${img.closest('.card').innerHTML}
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				`
// 	})
// 	img.addEventListener('mouseout', event => {
// 		modal.innerHTML = ''
// 	})
// })
