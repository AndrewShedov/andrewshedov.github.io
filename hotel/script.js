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
    

/*
    $(window).scroll(function(){
        if ($(window).scrollTop() > 150) {
            $('.nav').css("height", "40px");
            $(".nav  ul  li").css("height", "40px");
        }
        else {
            $('.nav').css("height", "80px");
            $(".nav  ul  li").css("height", "80px");
        }
    });
*/
/*
.scrollTop = intValue
Window.scroll(function(){
    if (Window.scrollTop > 150) {
        document.getElementById("nav").style.height = 10 + "px";
     
    }

   

    else {
        document.getElementById("nav").style.height = 80 + "px";
        
    }
});
    
window.addEventListener('scroll', function(e){
    document.getElementById("nav").style.height = document.body.scrollTop/2+"px";
  });
*/
/*
  var block = document.querySelector('.nav');

  window.addEventListener('scroll', function() {
    var
   
      height = 200;
  
    block.style.height = height + 'px';

    console.log(height);

  });
*/



document.addEventListener('scroll', () => { 
    let scrollTop = window.scrollY;    
    console.log(scrollTop);
    let nav = document.querySelector('.nav');
    let li = document.querySelectorAll(".nav  ul  li")
    
    if(scrollTop >= 180){
        li.forEach(el => el.style.height = "50px");
        nav.style.height = "50px";
       }

else{
nav.style.height = "80px";
li.forEach(el => el.style.height = "80px");
};
});
    


     