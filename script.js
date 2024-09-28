const userName = document.getElementById('name'); 
const nextBtn = document.getElementById('next-btn');
let users = [];
let currentIndex = 0;

function fetchUsersName() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(data => {
            users = data; 
            displayUsersName(); 
            // console.log(data)
        })
        .catch(error => {
            console.error('Error Found:', error);  
        });
}

function displayUsersName() {
    const currentUser = users[currentIndex];
    userName.innerHTML = currentUser.name;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < users.length) {
        displayUsersName(); 
    } else {
        alert('No more users!!!');
        currentIndex = 0; 
        displayUsersName();    
    }
});

fetchUsersName();
