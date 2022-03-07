let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector('#signin');

let getUser = localStorage.getItem('username');
let getPassword = localStorage.getItem('password');

loginBtn.addEventListener("click", login);

function login (e){
    e.preventDefault();
    if (username.value === "" || password.value === ""){
        alert('Please Fill Data');
    } else{
        if(getUser && getUser === username.value.trim() && getPassword && getPassword === password.value.trim()){
        setTimeout ( () => { window.location ="index.html";},1500)
        } else{
            alert("username or password is wrong");
        }
    }
};