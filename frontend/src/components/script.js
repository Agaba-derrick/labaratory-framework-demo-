document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example: Check if username and password are not empty
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter username and password');
        return;
    }

    // Perform authentication (you'll need to implement this part)
    // Example: Simulate authentication by checking if username is 'admin' and password is 'password'
    if (username === 'admin' && password === 'password') {
        alert('Login successful');
        // Redirect to dashboard or another page
        window.location.href = '/dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});
