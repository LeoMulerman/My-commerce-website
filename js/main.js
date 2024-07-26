

//   for header

window.addEventListener('scroll', e => {
    let navbar = document.getElementById('header').classList;
    let activeClass = 'navbar__scrolled';

    if (scrollY > 100) {
        navbar.add(activeClass);
    } else {
        navbar.remove(activeClass);
    }
})

// for burger

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');


burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
})





