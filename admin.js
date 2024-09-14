// Tokenni tekshirish
const token = localStorage.getItem('token');

if (!token) {
    window.location.href = 'index.html';
}

let data = JSON.parse(localStorage.getItem('users')) || [];

window.onload = function() {
    renderUserList();
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    data.push(user);

    localStorage.setItem('users', JSON.stringify(data));

    document.getElementById('userForm').reset();

    renderUserList();
});

function renderUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; 

    data.map((user, index) => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.innerHTML = `<strong>User ${index + 1}:</strong> ${user.firstName} ${user.lastName}, Age: ${user.age}`;
        userList.appendChild(userItem);
    });
}