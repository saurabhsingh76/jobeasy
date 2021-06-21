// window.onscroll = function() {sticky_navbar()};

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');
// main_img = document.querySelector(".main-img");

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

// var sticky = navbar.offsetTop;
// function sticky_navbar(){
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } 
//     else{
//         navbar.classList.remove("sticky");
//     }
// }

