"use strict"




//Navigation//


var navLink=document.querySelector(".nav__links");
var btnMenu=document.querySelector(".menu-btn");
var navLogo=document.querySelector(".nav__logo");
var navMain=document.querySelector(".nav");


var counter=1;

btnMenu.addEventListener("click",function(){
  
  if(counter===1){
  navLink.style.visibility="visible";
  btnMenu.textContent="X"
  navLogo.classList.add("displayLink")
  navMain.style.border="none";
counter++
}else if(counter=2){
  navLink.style.visibility="hidden";
  btnMenu.textContent="MENU"
  navLogo.classList.remove("displayLink")
  navMain.style.borderBottom="1px solid rgb(93, 93, 93)";
  counter--
}
  
})




window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    navLogo.classList.remove("displayLink");
    navLink.style.visibility="visible";
    counter=1;
  } else {
    console.log("Screen less than 1080px")
  }
})








 
const nav = document.querySelector('.nav');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');



///////////////////////////////////////
// Sticky navigation: Intersection Observer API
/*
const header = document.querySelector('.header-services');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
const [entry] = entries;
// console.log(entry);

if (!entry.isIntersecting) nav.classList.add('sticky');
else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
root: null,
threshold: 0,
rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);



*/


///////////////////////////////////////
// Modal window

const openModal = function (e) {
e.preventDefault();
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
};

const closeModal = function () {
modal.classList.add('hidden');
overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
  closeModal();
}
});




