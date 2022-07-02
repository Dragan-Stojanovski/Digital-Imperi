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



//starting slider







const slides = document.querySelectorAll('.sliderce');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events


// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }




 
  const nav = document.querySelector('.nav');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
  const btnCloseModal = document.querySelector('.btn--close-modal');
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');

  

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

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



var offerBtnOne=document.querySelector("#services-offer-btn1");

var offerBtnTwo=document.querySelector("#services-offer-btn2");

var offerBtnThree=document.querySelector("#services-offer-btn3");

var offerBtnFour=document.querySelector("#services-offer-btn4");

var offerBtnFive=document.querySelector("#services-offer-btn5");


var offerCaptionOne=document.querySelector(".services-offer-box-1");

var offerCaptionTwo=document.querySelector(".services-offer-box-2");

var offerCaptionThree=document.querySelector(".services-offer-box-3");

var offerCaptionFour=document.querySelector(".services-offer-box-4");

var offerCaptionFive=document.querySelector(".services-offer-box-5");

offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.add("display");
offerBtnOne.classList.add("kopce-stil");


offerBtnOne.addEventListener("click",function(){
  offerCaptionOne.classList.remove("display");
  offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.add("display");

offerBtnOne.classList.add("kopce-stil");
offerBtnTwo.classList.remove("kopce-stil");
offerBtnThree.classList.remove("kopce-stil");
offerBtnFour.classList.remove("kopce-stil");
offerBtnFive.classList.remove("kopce-stil");
})




offerBtnTwo.addEventListener("click",function(){
  offerCaptionOne.classList.add("display");
  offerCaptionTwo.classList.remove("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.add("display");

offerBtnOne.classList.remove("kopce-stil");
offerBtnTwo.classList.add("kopce-stil");
offerBtnThree.classList.remove("kopce-stil");
offerBtnFour.classList.remove("kopce-stil");
offerBtnFive.classList.remove("kopce-stil");
})



offerBtnThree.addEventListener("click",function(){
  offerCaptionOne.classList.add("display");
  offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.remove("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.add("display");

offerBtnOne.classList.remove("kopce-stil");
offerBtnTwo.classList.remove("kopce-stil");
offerBtnThree.classList.add("kopce-stil");
offerBtnFour.classList.remove("kopce-stil");
offerBtnFive.classList.remove("kopce-stil");
})





offerBtnFour.addEventListener("click",function(){
  offerCaptionOne.classList.add("display");
  offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.remove("display");
offerCaptionFive.classList.add("display");



offerBtnOne.classList.remove("kopce-stil");
offerBtnTwo.classList.remove("kopce-stil");
offerBtnThree.classList.remove("kopce-stil");
offerBtnFour.classList.add("kopce-stil");
offerBtnFive.classList.remove("kopce-stil");
})





offerBtnFive.addEventListener("click",function(){
  offerCaptionOne.classList.add("display");
  offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.remove("display");


offerBtnOne.classList.remove("kopce-stil");
offerBtnTwo.classList.remove("kopce-stil");
offerBtnThree.classList.remove("kopce-stil");
offerBtnFour.classList.remove("kopce-stil");
offerBtnFive.classList.add("kopce-stil");
})



var services=document.querySelector(".SERVICES");
var price=document.querySelector(".PRICING");

var servicesBtn=document.querySelector("#services-btn-1");
var priceBtn=document.querySelector("#services-btn-2");

price.classList.add("display")
servicesBtn.style.borderBottom="3px solid blue"

servicesBtn.addEventListener("click",function(){
  price.classList.add("display")
  services.classList.remove("display");
  servicesBtn.style.borderBottom="3px solid blue"
  priceBtn.style.borderBottom="none";
})

priceBtn.addEventListener("click",function(){
  price.classList.remove("display")
  services.classList.add("display");
  priceBtn.style.borderBottom="3px solid blue"
  servicesBtn.style.borderBottom="none";
})