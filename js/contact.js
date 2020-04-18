const p = document.querySelectorAll('.main-contact article figure figcaption p')
if(window.innerWidth <= 436) {
    p.forEach(e => e.style.fontSize = '14px')
}