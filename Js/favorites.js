let productsDom = document.querySelector(".products");
let noProductDom =document.querySelector(".noProducts")







function drawFavoritesProductsUI(allProducts = []){


    if(JSON.parse(localStorage.getItem('productsFavorite')).length === 0)
    noProductDom.innerHTML = "There Is NO Items !!"




    let products =JSON.parse(localStorage.getItem('productsFavorite')) || allProducts;
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
                        <button class="add-to-cart" onclick="removeItemFromCart(${item.id})" >Remove From Favorite</button>
                        
                    </div>
                </div>
            `;
    } );


    productsDom.innerHTML = productsUI.join("");

}

drawFavoritesProductsUI()


function removeItemFromCart(id){
    let productsFavorite = localStorage.getItem("productsFavorite")
    if(productsFavorite){
        let items = JSON.parse(productsFavorite);
        let filtereditems = items.filter((item) => item.id !== id);
        localStorage.setItem("productsFavorite", JSON.stringify(filtereditems))
        drawFavoritesProductsUI(filtereditems);
    }

}

