function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password.';
        return false;
    }
    
    // For demonstration: a sample username and password
    if (username === 'user' && password === 'password') {
        alert('Login successful');
        return true;
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        return false;
    }
}
