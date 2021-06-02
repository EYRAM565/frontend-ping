let btn = document.getElementById('btn');

let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (email.value == '') {
		email.style.border = '1px solid hsl(354, 100%, 66%)';
		errorMsg('email', 'Whoops! It looks like you forgot to add your email');
	} else if (validate(email)) {
		//email.style.border = '1px solid hsl(354, 100%, 66%)';
		errorMsg('email', 'please provide a valid email address');
	} else {
		email.style.border = '1px solid lightgreen';
	}
});

function errorMsg(field, message) {
	const info = form[field].parentElement.querySelector('small');
	info.innerText = message;
}

function validate(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
