let cartProductDivDom= document.querySelector('.carts-products div')
let badgeDom= document.querySelector('.badge')
let shoppingCartIcon =document.querySelector('.shoppingCart')
let cartProductMenu= document.querySelector('.carts-products')


// Cheak if there is items in local storge
let addedItem = localStorage.getItem("productsInCart") ?
JSON.parse(localStorage.getItem("productsInCart")) : [] ;


if(addedItem){
addedItem.map((item) => {
cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
});

badgeDom.style.display="block";
badgeDom.innerHTML += addedItem.length;
}

// Oped Cart Menu
shoppingCartIcon.addEventListener('click',openCartMenu);



// open Cart
function openCartMenu(){
    if (cartProductDivDom.innerHTML != ""){
        if(cartProductMenu.style.display == "none"){
            cartProductMenu.style.display = "block"
        } else{
            cartProductMenu.style.display = "none"
        }

        
        }

    }



function saveItemData(id){
    localStorage.setItem("productId",id);
    window.location = 'Cartdetails.html'
};