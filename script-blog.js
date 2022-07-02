"use strict"
var mainContainer = document.querySelector(".main-container");
const loadMoreBtn = document.querySelector('.load-more')
loadMoreBtn.classList.add("btn")
let cards = []

function printCards(data) {
    data.forEach(el => {
       
    let mainWrap=document.createElement("div");
mainWrap.classList.add("whole-wrap")
let title=document.createElement("h2")
let category=document.createElement("h5")
    let caption=document.createElement("p")
    let img=document.createElement("img")
    let link=document.createElement("a")
    
        img.src=el.image
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
        link.textContent="Read More"
        link.href=el.source_link


    mainWrap.appendChild(img);
    mainWrap.appendChild(category);
    mainWrap.appendChild(title);
    mainWrap.appendChild(caption);
    mainWrap.appendChild(link);
mainContainer.appendChild(mainWrap);
    })
}

fetch("data.json")
.then(res => res.json())
.then(function(data){
    printCards(data.slice(0, 8))
    cards = data.slice(8)
})

loadMoreBtn.addEventListener('click', function() {
    printCards(cards.splice(0, 8))
    if (cards.length <= 0) {
        loadMoreBtn.style.visibility = 'hidden'
    }
})




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





let slideImg=document.getElementById("slideImg");
var images=new Array(
    "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4474047/pexels-photo-4474047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  
);

var len = images.length;
var i = 0;

function slider(){
if(i>len-1){
    i=0;
}
slideImg.src=images[i];
i++;
setTimeout('slider()',4000);
}