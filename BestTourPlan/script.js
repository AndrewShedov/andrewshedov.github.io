let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let wrap = document.getElementById("wrap");
let UpButton = document.getElementById("UpButton");

///////////////Function opening menu
function calcShowMenu(showMenu) {
  burger.classList.toggle("burger-open", showMenu);
  menu.classList.toggle("menu-open", showMenu);
  menu.classList.toggle("menuMoveLeft", showMenu);

  const menuWidth = menu.offsetWidth;
  [wrap.style, burger.style, UpButton.style].map(
    (v) => (v.transform = `translateX(${showMenu ? -menuWidth + 1 : 0}px)`)
  );

  [burger.style].map(
    (v) => (v.transform = `translateX(${showMenu ? -menuWidth - 25 : 0}px)`)
  );
}

let showMenu = false;

////////////////Hover burger
burger.onmouseover = function () {
  burger.classList.toggle("hoverBurger");
};

burger.onmouseout = function () {
  burger.classList.toggle("hoverBurger");
};

/////////////////Pressing a Burger
burger.addEventListener("click", () => calcShowMenu((showMenu = !showMenu)));
/////////////Closing when pressed outside the menu
window.addEventListener("mousedown", (event) => {
  if (!event.target.closest(".menu, .burger")) calcShowMenu((showMenu = false));
});

/////////////Closing when pressed outside the menu for mobile
window.addEventListener("touchstart", (event) => {
  if (!event.target.closest(".menu, .burger")) calcShowMenu((showMenu = false));
});

/////////////Closing when you click on a menu item
document.getElementById("menu").onclick = function (event) {
  var target = event.target;
  if (target.tagName == "A") {
    calcShowMenu((showMenu = !showMenu));
  }
};

/*Menu scrolling*/
/*
document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  let nav = document.querySelector(".nav");
  let li = document.querySelectorAll(".nav  ul  li");

  if (scrollTop >= 180) {
    li.forEach((el) => (el.style.height = "45px"));
    nav.style.height = "45px";
  } else {
    nav.style.height = "80px";
    li.forEach((el) => (el.style.height = "80px"));
  }
});
*/
/*Menu_2*/

function Tabs() {
  let bindAll = function () {
    let menuElements = document.querySelectorAll("[data-tab]");
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", change, false);
    }
  };

  let clear = function () {
    let menuElements = document.querySelectorAll("[data-tab]");
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active");
      let id = menuElements[i].getAttribute("data-tab");
      document.getElementById(id).classList.remove("active");
    }
  };

  let change = function (e) {
    clear();
    e.target.classList.add("active");
    let id = e.currentTarget.getAttribute("data-tab");
    document.getElementById(id).classList.add("active");
  };

  bindAll();
}

let connectTabs = new Tabs();

/* UP BUTTON */

function scrollTo(to, duration = 700) {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector("#UpButton");
  window.addEventListener("scroll", function () {
    // If we scrolled further 599px, we show the button
    if (pageYOffset > 100) {
      btn.classList.add("show");
      // Otherwise we hide
    } else {
      btn.classList.remove("show");
    }
  });

  // When you click, scroll to the very top
  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 200);
  };
});

/*
document.addEventListener('scroll', () => { 
    
let scrollTop = window.scrollY; 

let li = document.querySelectorAll(".nav  ul  li")
    
if(scrollTop >= 175){
    li.forEach(el =>{el.classList.add("lit");});
}

     else{
        li.forEach(el =>{el.classList.remove("lit");})
         };


});
*/
