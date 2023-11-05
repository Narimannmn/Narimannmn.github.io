document.addEventListener('DOMContentLoaded', async function () {
	const navDiv = document.querySelector('.navDiv')
	const footDiv = document.querySelector('.footerDiv')
	const filterDiv = document.querySelector('.filterDiv')
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
	]
	for (const value of navfoot) {
		try {
			const res = await fetch(value.link)
			const data = await res.text()
			if (value.div) {
				value.div.innerHTML = data
				if (value.link === '/navbar.html') {
					let role = sessionStorage.getItem('role') || 0;
					const formLink = document.querySelectorAll('.formLink')
					const cartLink = document.querySelectorAll('.cartLink')
					const adminLink = document.querySelectorAll('.adminLink')
					const logoutLink = document.querySelectorAll('.logout')
					if(role == 0){
						formLink.forEach(element => {
							element.innerHTML = `<a class="nav-link me-5" href="form.html"><i class="fa-solid fa-user fa-xl"></i></a>`
						})
						cartLink.forEach(element => {
							element.innerHTML = `<a class="nav-link me-5"><i class="fa-solid no-ath-cart fa-cart-shopping fa-xl"></i></a>`
						})
					}else{
						cartLink.forEach(element => {
							element.innerHTML = `<a class="nav-link me-5" href="cart.html"><i class="fa-solid fa-cart-shopping fa-xl"></i></a>`
						})
						logoutLink.forEach(element => {
							element.innerHTML = `<a class="nav-link me-5"><i class="fa-solid fa-x fa-xl" onclick="logout()"></i></a>`
						})
					}
					if(role > 1){
						adminLink.forEach(element => {
							element.innerHTML = `<a class="nav-link me-5" href="admin.html"><i class="fa-solid fa-lock fa-xl"></i></a>`
						})
					}
				}
			}
		} catch (error) {
			console.error('Error fetching content:', error)
		}
	}
})
function logout(){
	sessionStorage.setItem('role', 0);
	location.replace('index.html') 
}
//
// 	//=============================================
	let imgs = document.querySelectorAll('.card-imgs')
	const modal = document.querySelector('.modalblock')
	imgs.forEach(img => {
		img.addEventListener(
			'mouseover',
			event => {
				modal.innerHTML = `
				<div class="modal d-block" tabindex="-1">
					<div class="modal-dialog bg-primary">
						<div class="modal-content">
							<div class="modal-body">
								${img.closest('.card').innerHTML}
							</div>
						</div>
					</div>
				</div>
				`
			}
		)
		img.addEventListener('mouseout', event => {
			modal.innerHTML = '' 
		})
	})

