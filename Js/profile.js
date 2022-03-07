//get data from local st
let get_user = localStorage.getItem('username');
let get_email = localStorage.getItem('email');
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let myProducts = products.filter((i)=> i.isMe === "Y")


//var
let userDom2 = document.getElementById('username');
let userEmailDom = document.getElementById('email');
let productsLength = document.querySelector ('#productsLength span');
console.log(productsLength);
userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
if(myProducts != 0 ) {
    productsLength.innerHTML = myProducts.length;

}else{
    productsLength.remove();
}