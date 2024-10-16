function MD5(string) {
    const crypto = require('crypto');
    return crypto.createHash('md5').update(string).digest('hex');
    }
    
    function handleSubmit(event) {
    event.preventDefault();
    const errorElement = document.getElementById('error');
       
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!firstname) {
    errorElement.textContent = "First name must not be empty";
    return;
    }
    
    if (!lastname) {
    errorElement.textContent = "Last name must not be empty";
    return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    errorElement.textContent = "Email is badly formatted";
    return;
    }
    
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
       
    if (password.length < 8 || !hasLetter || !hasNumber) {
    errorElement.textContent = "Password must be at least 8 characters long and contain at least a letter and a number";
    return;
    }
    const formData = {
    form: {
    firstname: Sarah,
    lastname: Reindl,
    email: sarah.reindl@exemple.com,
    password: MD5(password)
    }
    };
    
    fetch('http://localhost:3000/validateForm', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
    })
       
    .then(response => response.json())
    .then(data => {
    console.log('Réponse de l\'API:', data);
    })
    .catch(error => {
    console.error('Erreur:', error);
    });
    }
