let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let wrap = document.getElementById('wrap');


///////////////Function opening menu
function calcShowMenu(showMenu) {
	burger.classList.toggle("burger-open", showMenu);
	menu.classList.toggle("menu-open", showMenu);    
    menu.classList.toggle("menuMoveLeft", showMenu);
   
    const menuWidth = menu.offsetWidth;
    [wrap.style, burger.style].map(v => v.transform = `translateX(${showMenu ? -menuWidth + 1 : 0}px)`);
    [burger.style].map(v => v.transform = `translateX(${showMenu ? -menuWidth - 25 : 0}px)`);
    
    }


let showMenu = false

////////////////Hover burger
burger.onmouseover = function() {
    burger.classList.toggle("hoverBurger");
   }

burger.onmouseout = function() {
    burger.classList.toggle("hoverBurger");
   }


/////////////////Pressing a Burger
burger.addEventListener('click', () => calcShowMenu(showMenu = !showMenu)
);
;


/////////////Closing when pressed outside the menu
window.addEventListener('mousedown', event => {
	if ( !event.target.closest(".menu, .burger") )
        calcShowMenu(showMenu = false);
        
        }
         )

/////////////Closing when pressed outside the menu for mobile
        window.addEventListener('touchstart', event => {
            if ( !event.target.closest(".menu, .burger") )
                calcShowMenu(showMenu = false);
                })



/////////////Closing when you click on a menu item
document.getElementById('menu').onclick = function(event) {
    var target = event.target; 
    if (target.tagName == 'A') {
        calcShowMenu(showMenu = !showMenu)
       
	}
    }
    




/*Menu scrolling*/



document.addEventListener('scroll', () => { 
    
let scrollTop = window.scrollY; 

let nav = document.querySelector('.nav');
let li = document.querySelectorAll(".nav  ul  li")
    
if(scrollTop >= 180){
    li.forEach(el => el.style.height = "40px");
    nav.style.height = "40px";

}
else{
     nav.style.height = "80px";
     li.forEach(el => el.style.height = "80px");
     
     
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

