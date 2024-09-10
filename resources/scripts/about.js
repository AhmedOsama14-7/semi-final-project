const menu_bar_icon = document.querySelector("i")
const menu_bar = document.querySelector(".dropdown-menu-clicked")

console.log(menu_bar,menu_bar_icon)
menu_bar_icon.addEventListener('click' , function (){
    menu_bar.classList.toggle("active")
    
})