const date = new Date()
const hari = date.toLocaleDateString()

const time = document.getElementById('time')
function TampilDate() {
    time.innerText = hari
}

TampilDate()


//view footer
const arrow = document.querySelector('main .arrow')
const footer = document.querySelector('footer')

arrow.addEventListener('click', function(e) {
    if(e.target.classList.contains('down')) {
        e.target.classList.toggle('up')
        setTimeout(function() {
            footer.classList.toggle('view')
        },200)
    }
})

//Sidebar
const tabSidebar = document.getElementById('stream')
const sidebar = document.querySelector('.sidebar')
const tabOpen = document.querySelector('header .tab-open')
const navbar = document.querySelector('.navbar')
const main = document.querySelector('main')
const hero = document.querySelector('main #content .hero')

tabSidebar.addEventListener('click',function() {
    sidebar.style.right = '-100px'
    tabOpen.style.display = 'inline-block'
    navbar.style.width = '100%'
    main.style.width = '100%'
    footer.style.width = '100%'
    hero.style.backgroundPositionY = '-540px'
    hero.style.backgroundPositionX = '100px'
})

tabOpen.addEventListener('click', function() {
    sidebar.style.right = '0'
    tabOpen.style.display = 'none'
    navbar.style.width = '94%'
    main.style.width = '94%'
    footer.style.width = '94%'
    hero.style.backgroundPositionY = '-570px'
    hero.style.backgroundPositionX = '0'
})

window.addEventListener('scroll',function(e) {
    if(window.scrollY > 30) {
        document.querySelector('.navbar').classList.add('green')
    } else {
        document.querySelector('.navbar').classList.remove('green')
    }
})
