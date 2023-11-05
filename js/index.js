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
