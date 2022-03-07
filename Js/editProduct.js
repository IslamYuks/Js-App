// //varibles
let products = JSON.parse(localStorage.getItem("products"))||productsDB;
let productId =JSON.parse(localStorage.getItem("editProduct"))
let getProduct =products.find((i)=>i.id === productId)
console.log("bupdate", getProduct);
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let updateForm = document.getElementById('update-form');
let inputFile = document.getElementById('upload-image-file');
let productSizeValue;
let productImage;


productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.imageUrl;


// //Events
productSizeSelect.addEventListener('change', getProductSizeValue)
updateForm.addEventListener('submit', updateProductForm)
inputFile.addEventListener('change', uploadImage)





//functions
function getProductSizeValue(e){
productSizeValue = e.target.value ;
};

function updateProductForm (e) {
    e.preventDefault();

getProduct.title = productName.value ;
getProduct.desc = productDesc.value;
getProduct.size = productSizeSelect.value;
getProduct.imageUrl = productImage;

console.log("aupdate", getProduct);


localStorage.setItem("products",JSON.stringify(products));
setTimeout(() => {
    window.location = "index.html"
},500)

//     let allPorducts = JSON.parse(localStorage.getItem("products")) || productsDB;
//     let nameValue = productName.value;
//     let descValue = productDesc.value;

//     if( nameValue && descValue){

//     let obj = {
//         id : allPorducts ? allPorducts.length + 1 : 1, 
//         qty : 1,
//         imageUrl :productImage,
//         size : productSizeValue,
//         title : nameValue,
//         desc : descValue,
//         isMe : "Y"
//         };
//     let newPorducts =allPorducts ? [...allPorducts , obj] : [obj];
//     localStorage.setItem("products",JSON.stringify(newPorducts));

//     productName.value = "";
//     productDesc.value = "";
//     productSizeSelect.value = "";
//     setTimeout(()=>{
//         window.location = "index.html";
//     }, 500)
// }else {alert("Enter Data")}
}


//uploadImage

function uploadImage(){
    let file = this.files[0]

    let types =["image/jpeg" , "image/png"];

    if(types.indexOf(file.type) == -1){
        alert("Type NOt Supported");
        return;
    }

    if(file.size > 2 * 1024 *1024 ){
        alert("image Not Exced 2 MB");
        return;
    }
getImageBase64(file)
    // productImage = URL.createObjectURL(file);
}

function getImageBase64(file){
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function(){
        productImage= reader.result;
    };

    reader.onerror = function(){
        alert("error !!")
    }
}



