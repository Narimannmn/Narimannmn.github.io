document.querySelector(
	'.signup'
).innerHTML = `<h1 class="text-center">Sign up</h1>
													<form onsubmit="signup()">
														<div class="form-group">
															<label>Phone number</label>
															<input type="text" id="phone" required class="form-control border-info">
															<div class="invalid-feedback">phone number is required</div>
														</div>
													
														<div class="form-group">
															<label>Name:</label>
															<input type="text" id="name" required class="form-control border-info">
														</div>
													
														<div class="form-group">
															<label>Password:</label>
															<input type="password" id="password1" required class="form-control border-info">
															<div class="invalid-feedback">Invalid password</div>
														</div>
														<div class="form-group">
															<label>Try password:</label>
															<input type="password" id="password2" required class="form-control border-info">
															<div class="invalid-feedback">Invalid password</div>
														</div>
														
														<button type="submit" class="btn btn-primary mt-3" >Submit</button>
       												 </form>`
document.querySelector('.signupBtn').addEventListener('click', function () {
	document.querySelector('.signin').innerHTML = ''
	document.querySelector(
		'.signup'
	).innerHTML = `<h1 class="text-center">Sign up</h1>
													<form onsubmit="signup()">
														<div class="form-group">
															<label>Phone number</label>
															<input type="text" id="phone" required class="form-control border-info">
															<div class="invalid-feedback">phone number is required</div>
														</div>
													
														<div class="form-group">
															<label>Name:</label>
															<input type="text" id="name" required class="form-control border-info">
														</div>
													
														<div class="form-group">
															<label>Password:</label>
															<input type="password" id="password1" required class="form-control border-info">
															<div class="invalid-feedback">Invalid password</div>
														</div>
														<div class="form-group">
															<label>Try password:</label>
															<input type="password" id="password2" required class="form-control border-info">
															<div class="invalid-feedback">Invalid password</div>
														</div>
														
														<button type="submit" class="btn btn-primary mt-3" >Submit</button>
       												 </form>`
	document.querySelector('.signupBtn').classList.remove('btn-outline-primary')
	document.querySelector('.signupBtn').classList.add('btn-primary')
	document.querySelector('.signinBtn').classList.add('btn-outline-primary')
	document.querySelector('.signinBtn').classList.remove('btn-primary')
})
document.querySelector('.signinBtn').addEventListener('click', function () {
	document.querySelector('.signup').innerHTML = ''
	document.querySelector(
		'.signin'
	).innerHTML = `<h1 class="text-center">Sign in</h1>
    
													<form onsubmit="signin()">
														<div class="form-group">
															<label>Phone number</label>
															<input type="text" id="inphone" required class="form-control border-info">
															<div class="invalid-feedback">phone number is required</div>
														</div>
														<div class="form-group">
															<label>Password:</label>
															<input type="password" id="inpassword1" required class="form-control border-info">
															<div class="invalid-feedback">Invalid password</div>
														</div>
														<button type="submit" class="btn btn-primary mt-3">Submit</button>
													</form>`
	document.querySelector('.signinBtn').classList.remove('btn-outline-primary')
	document.querySelector('.signinBtn').classList.add('btn-primary')
	document.querySelector('.signupBtn').classList.add('btn-outline-primary')
	document.querySelector('.signupBtn').classList.remove('btn-primary')
})

const admin_phones = ['87058266677']
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

function signup(e) {
	event.preventDefault()
	const phoneInput = document.getElementById('phone')
	const nameInput = document.getElementById('name')
	const passwordInput = document.getElementById('password1')
	const passwordInput2 = document.getElementById('password2')
	const namePattern = /^[a-zA-Z\s]+$/
	const passwordPattern =
		/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/
	const phoneNumberPattern = /^\d{11}$/

	phoneInput.classList.remove('is-invalid')
	nameInput.classList.remove('is-invalid')
	passwordInput.classList.remove('is-invalid')
	passwordInput2.classList.remove('is-invalid')

	if (
		!(
			passwordInput.value === passwordInput2.value &&
			passwordInput.value.match(passwordPattern)
		)
	) {
		passwordInput.classList.add('is-invalid')
		passwordInput2.classList.add('is-invalid')
		return false
	}

	if (!phoneNumberPattern.test(phoneInput.value)) {
		phoneInput.classList.add('is-invalid')
		return false
	}

	if (!nameInput.value.match(namePattern)) {
		nameInput.classList.add('is-invalid')
		return false
	}

	let user = {
		phone: phoneInput.value,
		name: nameInput.value,
		password: hash(passwordInput.value),
	}
	let users = JSON.parse(localStorage.getItem('users')) || []
	users.push(user)
	localStorage.setItem('users', JSON.stringify(users))
	setRole(1)
	alerttext('You have been succesfully sign up', 4000)
	setTimeout(3000)
	location.replace('index.html')
}
function hash(password) {
	let hash = 0
	let i
	let chr
	for (i = 0; i < password.length; i++) {
		chr = password.charCodeAt(i)
		hash = 5 + hash + chr
	}
	return hash
}
function setRole(level) {
	sessionStorage.setItem('role', level)
}
function signin(e) {
	event.preventDefault()
	const phoneInput = document.getElementById('inphone')
	const passwordInput = document.getElementById('inpassword1')
	phoneInput.classList.remove('is-invalid')
	passwordInput.classList.remove('is-invalid')

	let users = JSON.parse(localStorage.getItem('users')) || []
	const userExists = users.some(
		user =>
			user.phone === phoneInput.value &&
			user.password === hash(passwordInput.value)
	)
	if (userExists) {
		alerttext('You successfully logged in!', 2000)
		if (admin_phones.includes(phoneInput.value)) {
			setRole(2)
		} else {
			setRole(1)
		}
		location.replace('index.html')
	} else {
		alerttext('Something goes wrong', 2000, 'danger')
		location.reload()
	}
}
