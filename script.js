const menuBar = document.querySelector('.menu-bar')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
const btnTop = document.querySelector('.btn-top')


menuBar.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    if(navLinks.classList.contains('show')) {
        menuBar.style.color = 'var(--primary)'
    } else {
        menuBar.style.color = '#fff'
    }
})
links.forEach(li => {
    li.addEventListener('click', () => {
        navLinks.classList.remove('show')
        if(navLinks.classList.contains('show')) {
            menuBar.style.color = 'var(--primary)'
        } else {
            menuBar.style.color = '#fff'
        }
    })
})
document.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        btnTop.classList.add('show')
    } else {
        btnTop.classList.remove('show')
    }
})
btnTop.addEventListener('click', (e) => {
    window.scrollTo(0,0)
})


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 5,
        stretch: 0,
        // depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});