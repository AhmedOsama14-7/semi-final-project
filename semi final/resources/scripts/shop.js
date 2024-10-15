const menu_bar_icon = document.querySelector("i");
const menu_bar = document.querySelector(".dropdown-menu-clicked");

console.log(menu_bar, menu_bar_icon);
menu_bar_icon.addEventListener("click", function () {
    menu_bar.classList.toggle("active");
});





async function fetchApi (){
    const res = await fetch("http://localhost:3000/products")
    const finalRes = await res.json()
    ApiHtml(finalRes)
}
fetchApi()

function ApiHtml (data){
    let apiTemp = ``;

    data.forEach((api, index) => {
        apiTemp += `
        
        <div class="product-box">
                    
                    <div class="product-card-img">
                        <img src="${api.img}" alt="${api.name}">
                        </div>
                        <div class="product-card-head">
                        
                        <h3>Product Name</h3>
                        </div>
                    <div class="product-card-body">
                    <p>${api.price}$</p>
                    
                    </div>
                    <button class="animated-addToCartBtn">Add To Cart</button>
                </div>
                `
            });
            
            document.querySelector(".products-wrapper").innerHTML = apiTemp
        }
        // <i onclick="test(this,${index})" class="heart fa-regular fa-heart"></i>

const filterChoice = document.querySelectorAll(".filter-list li")

const heart = document.querySelectorAll(".heart")

function test (mm,index){
    if (mm.className.includes("fa-regular")) {
       
        mm.classList.remove("fa-regular")
        mm.classList.add("fa-solid")
        
       }else{
        mm.classList.add("fa-regular")
        mm.classList.remove("fa-solid")
       }
    
}
    
    // heart.addEventListener("click", () => {
    //    if (heart.className.includes("fa-regular")) {
       
    //     heart.classList.remove("fa-regular")
    //     heart.classList.add("fa-solid")
        
    //    }else{
    //     heart.classList.add("fa-regular")
    //     heart.classList.remove("fa-solid")
    //    }
    //     //  ?  : heart.className.replace("fa-solid", "fa-regular");
    // });
    ;
   


const productCard = document.querySelectorAll(".product_box");
const singlePageCard = document.querySelector(".")
productCard.forEach((card)=>{

})