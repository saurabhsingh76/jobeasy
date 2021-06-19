let is_scrolled = false;
window.onscroll = function() {is_scrolled= true; sticky_navbar()};

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');
container1margin = document.getElementById("container1-resp");

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    if(is_scrolled){
        if(container1margin.style.marginTop=="217px"){
            container1margin.style.marginTop="0px";   
        }
        else
        {
            container1margin.style.marginTop="217px";
        }
    }
})

var sticky = navbar.offsetTop;
function sticky_navbar(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } 
    else{
        navbar.classList.remove("sticky");
    }
}
