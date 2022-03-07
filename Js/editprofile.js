//get data from local st
let get_user = localStorage.getItem('username');
let get_email = localStorage.getItem('email');


//var
let userInput = document.getElementById('changeName');
let userEmailInput = document.getElementById('changeEmail');
let editForm = document.querySelector ('#edit-profile-form');


//setting values
userInput.value = get_user
userEmailInput.value = get_email

//Events

editForm.addEventListener('submit' , editProfileData)

function editProfileData(e) {
    e.preventDefault();
    localStorage.setItem("username",userInput.value)
    localStorage.setItem("email",userEmailInput.value)

    setTimeout(()=> {
        window.location ='profile.html';
    })
}