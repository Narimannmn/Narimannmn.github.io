let div = document.querySelector('.divUsers')
let users = JSON.parse(localStorage.getItem('users')) || []

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


const reloadUsers = () => {
	div.innerHTML = ''
	let count = 0
	users.forEach((value, key) => {
		count += 1
		if (value != null) {
			let newDiv = document.createElement('tr')
			newDiv.innerHTML = `
		                <th contenteditable>${count}</th>
		                <th contenteditable>${value.name}</th>
		                <th contenteditable>${value.phone}</th>
		                <th contenteditable>${value.password}</th>
						<th><button class="btn btn-primary" onclick="SaveChange(${key})">Save change</button></th>
						<th><button class="btn btn-danger" onclick="removeUser(${key})">Remove</button></th>
				`
			div.appendChild(newDiv)
		}
	})
}
reloadUsers()
function addUser(){
	const newUser = {
		name: 'Name',
		phone: 'Phone',
		password: 'Password',
	}

	users.push(newUser)
	localStorage.setItem('users', JSON.stringify(users))
	alerttext('User added successfully', 3000)
	reloadUsers()
	
}
const SaveChange = (key) => {
		const rows = div.getElementsByTagName('tr')
		if (key >= 0 && key < users.length ) {
			const cells = rows[key].getElementsByTagName('th')
			users[key].name = cells[1].innerText
			users[key].phone = cells[2].innerText
			users[key].password = cells[3].innerText
		}
		localStorage.setItem('users', JSON.stringify(users))
		alerttext('Changes Saved', 3000)
		reloadUsers()
}
function removeUser(index) {
	users.splice(index, 1) 
	localStorage.setItem('users', JSON.stringify(users))
	alerttext('User removed successfully', 3000,'danger')
	reloadUsers() 

}
