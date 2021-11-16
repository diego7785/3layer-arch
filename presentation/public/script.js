function getUsers(){
    event.preventDefault();
    fetch('http://localhost:8080/')
    .then(res => res.json())
    .then(data => {
        let users = data.msg;
        let list = document.getElementById('listOfUsers');
        users.forEach(user => {
            let li = document.createElement('li');
            li.innerHTML = `Name: ${user.name}, Lastname: ${user.lastname}, Age: ${user.age}`;
            list.appendChild(li);
        });
    })
    .catch(err => {
        console.log(err);
        alert('Error');
    })
}

function getImage(){
    event.preventDefault();
    fetch('http://localhost:8080/image')
    .then(res => res.json())
    .then(data => {
        alert(data.msg)
    })
    .catch(err => {
        console.log(err);
        alert('Error');
    })
}

function sendEmail(){
    event.preventDefault();
    fetch('http://localhost:8080/email')
    .then(res => res.json())
    .then(data => {
        alert(data.msg)
    })
    .catch(err => {
        console.log(err);
        alert('Error');
    })
}