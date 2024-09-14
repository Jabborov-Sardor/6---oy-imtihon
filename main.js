document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => {
        if (json.token) {
            localStorage.setItem('token', json.token);
            window.location.href = 'admin.html';
        } else {
            alert('Login yoki parol xato!');
        }
    })
    .catch(err => {
        console.error('Xato:', err);
        alert('Tizimda muammo yuz berdi. Qayta urinib ko\'ring.');
    });
});