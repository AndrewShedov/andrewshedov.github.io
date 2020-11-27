let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let wrap = document.getElementById('wrap');
let footer = document.getElementById('footer');

///////////////Function opening menu
function calcShowMenu(showMenu) {
	burger.classList.toggle("burger-open", showMenu);
	menu.classList.toggle("menu-open", showMenu);    
    menu.classList.toggle("menuMoveLeft", showMenu);
   
    const menuWidth = menu.offsetWidth;
    [wrap.style, footer.style, burger.style].map(v => v.transform = `translateX(${showMenu ? -menuWidth + 1 : 0}px)`);
    [burger.style].map(v => v.transform = `translateX(${showMenu ? -menuWidth - 10 : 0}px)`);
    
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
    
///////////////SCROLLLLLLLLLLLLL
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
    const id = smoothLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        e.preventDefault();
    });
};