let productsDom = document.querySelector(".products");
let noProductDom =document.querySelector(".noProducts")







function drawCartProductsUI(allProducts = []){


    if(JSON.parse(localStorage.getItem('productsInCart')).length === 0)
    noProductDom.innerHTML = "There Is NO Items !!"




    let products =JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
    let productsUI = products.map( (item) => {
        return `
                <div class="product-item">
                    <img src='${item.imageUrl}' 
                    class="product-item-img" 
                    alt="first">
                
                    <div class="p">
                        <h2>${item.title}</h2>
                        <p>${item.desc} </p>
                        <span>Size: ${item.size}</span> <br>
                        <span> Quantaity: ${item.qty}</span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="removeItemFromCart(${item.id})" >Remove From Cart</button>
                        
                    </div>
                </div>
            `;
    } );


    productsDom.innerHTML = productsUI.join("");

}

drawCartProductsUI()


function removeItemFromCart(id){
    let productsInCart = localStorage.getItem("productsInCart")
    if(productsInCart){
        let items = JSON.parse(productsInCart);
        let filtereditems = items.filter((item) => item.id !== id);
        localStorage.setItem("productsInCart", JSON.stringify(filtereditems))
        drawCartProductsUI(filtereditems);
    }

}

