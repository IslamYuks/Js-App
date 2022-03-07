
// define products

let productsDom = document.querySelector(".products");
// let cartProductMenu= document.querySelector('.carts-products')
// let cartProductDivDom= document.querySelector('.carts-products div')
// let shoppingCartIcon =document.querySelector('.shoppingCart')
// let badgeDom= document.querySelector('.badge')
let products = productsDB;


// Oped Cart Menu
// shoppingCartIcon.addEventListener('click',openCartMenu);
//Display Products
let drawProductsUI;

(drawProductsUI = function ( products = []){
    let productsUI = products.map( (item) => {
        return `
                <div class="product-item" style = "border: ${item.isMe === "Y" ? ' 2px solid green' : ""}">
                    <img src='${item.imageUrl}' 
                    class="product-item-img" 
                    alt="first">
                
                    <div class="product-item-desc">
                        <a onclick='saveItemData(${item.id})'>${item.title}</a>
                        <p>${item.desc} </p>
                        <span>Size: ${item.size}</span>

                        ${item.isMe === "Y" && "<button class='edit-product' onclick = 'editProduct("+ item.id +")'> Edit Product</button>" }
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="addedToCart(${item.id})" >Add To Cart</button>
                        <i  class="favorite far fa-heart" style="color: ${item.liked == true ? 'red' : '' }" 
                        onclick="addedToFavorite(${item.id})" ></i>
                    </div>
                </div>
            `;
    } );

productsDom.innerHTML = productsUI.join("");


})(JSON.parse(localStorage.getItem('products')) || productsDB);

    
// Cheak if there is items in local storge
// let addedItem = localStorage.getItem("productsInCart") ?
// JSON.parse(localStorage.getItem("productsInCart")) : [] ;


// if(addedItem){
// addedItem.map((item) => {
// cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
// });

// badgeDom.style.display="block";
// badgeDom.innerHTML += addedItem.length;
// }   


// Add to cart
function addedToCart(id){

    if(localStorage.getItem('username')){    
let products = JSON.parse(localStorage.getItem("products"))||products;
let product = products.find((item) => item.id === id);
let isProductInCart = addedItem.some((i)=> i.id === product.id);
if(isProductInCart){
    addedItem= addedItem.map(p => {
        if(p.id === product.id)p.qty +=1;
        return p ;
    })
} else {
    addedItem.push(product);
}

cartProductDivDom.innerHTML = ""
addedItem.forEach(item => {
    cartProductDivDom.innerHTML +=`<p>${item.title} <span class='item-qty'>${item.qty}</span></p>`;

});

// addedItem = [...addedItem , choosenitem];
// let uniqueProducts = getUniqueArr(addedItem ,"id")

// Save Data 
localStorage.setItem("productsInCart",JSON.stringify(addedItem))

// Add conter of items 
let cartProductItems= document.querySelectorAll('.carts-products div p');

badgeDom.style.display="block";
badgeDom.innerHTML = cartProductItems.length;
}else{
    window.location="login.html"
}
};

function getUniqueArr(arr , filterType){
    let unique = arr.map((item) => item[filterType]).map((item , i ,final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);

    return unique; 
};



// // open Cart
// function openCartMenu(){
//     if (cartProductDivDom.innerHTML != ""){
//         if(cartProductMenu.style.display == "none"){
//             cartProductMenu.style.display = "block"
//         } else{
//             cartProductMenu.style.display = "none"
//         }

        
//         }

//     }



// function saveItemData(id){
//     localStorage.setItem("productId",id);
//     window.location = 'Cartdetails.html'
// };


//search function
let input = document.getElementById('search');

input.addEventListener('keyup' , function (e) {
        search(e.target.value , JSON.parse(localStorage.getItem('products')));
    
    if(e.target.value.trim() === ""){drawProductsUI(JSON.parse(localStorage.getItem('products')))}
}
);

function search(title , myArray){
    let arr = myArray.filter( (item) => item.title.toLowerCase().indexOf (title.toLowerCase()) !== -1);
    console.log(arr);
    drawProductsUI(arr);
};



// Add to favorite
let favoriteItems = localStorage.getItem("productsFavorite") ?
JSON.parse(localStorage.getItem("productsFavorite")) : [] ;
function addedToFavorite(id){

    if(localStorage.getItem('username')){    
let choosenitem = products.find((item) => item.id === id);
choosenitem.liked = true;
favoriteItems = [...favoriteItems , choosenitem]
let uniqueProducts = getUniqueArr(favoriteItems ,"id")
localStorage.setItem("productsFavorite",JSON.stringify(uniqueProducts));
products.map(item => {if (item.id === choosenitem.id){
    item.liked = true;
}
})
localStorage.setItem("products",JSON.stringify(products))
drawProductsUI(products)
}else{
    window.location="login.html"
}
}


//Filter Products By Size 
let sizeFilter = document.getElementById("size-filter")

sizeFilter.addEventListener('change' , getProductFilteredBySize)


function getProductFilteredBySize(e){
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("products"))|| products;

    if(val === "all"){
        drawProductsUI(products)
    }else{
        products = products.filter((i)=> i.size === val)
        drawProductsUI(products)
    }
};

//Edit Product
function editProduct(id){
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html"
}
