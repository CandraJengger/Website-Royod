//! About
const mainAbout = document.querySelector('.main-about')
window.addEventListener('resize', function(e) {
    if(e.target.innerWidth <= 950) {
        mainAbout.children[0].style.width = '80%'
    } else {
        mainAbout.children[0].style.width = '50%'
    }
})