/* UP BUTTON */

function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#UpButton');
    window.addEventListener('scroll', function () {
        // If we scrolled further 599px, we show the button
        if (pageYOffset > 100) {
            btn.classList.add('show');
            // Otherwise we hide
        } else {
            btn.classList.remove('show');
        }
    });
    
    // When you click, scroll to the very top
    btn.onclick = function (click) {
        click.preventDefault();
        //Speed up
        scrollTo(0, 200);
    }
  });

///////////////scrol when you click on the title
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