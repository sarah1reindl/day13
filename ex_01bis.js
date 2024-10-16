function handleSubmit(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorElement = document.getElementById('error');

    errorElement.textContent = '';

    if (firstName === '') {
        errorElement.textContent = 'First name must not be empty';
        alert('First name must not be empty');
        return;
    }
    if (lastName === '') {
        errorElement.textContent = 'Last name must not be empty';
        alert('Last name must not be empty');
        return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Email is badly formatted';
        alert('Email is badly formatted');
        return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password.length < 8, !passwordRegex.test(password)) {
        errorElement.textContent = 'Password must be at least 8 characters long and contain at least a letter and a number';
        alert('Password must be at least 8 characters long and contain at least a letter and a number');
        return;
    }
    alert('Form submitted successfully!');
}
