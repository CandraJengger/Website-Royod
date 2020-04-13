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
    if(window.innerWidth > 1198) {
        hero.style.backgroundPositionY = '-540px'
        hero.style.backgroundPositionX = '100px'
    } else if(window.innerWidth < 1198 && window.innerWidth > 1100) {
        hero.style.backgroundPositionY = '-540px'
        hero.style.backgroundPositionX = '50px'
    } else if(window.innerWidth < 1100 && window.innerWidth > 835) {
        hero.style.backgroundPositionY = '-360px'
        hero.style.backgroundPositionX = '-20px'
    }


   HideSearch()
    
})

tabOpen.addEventListener('click', function() {
    sidebar.style.right = '0'
    tabOpen.style.display = 'none'
    navbar.style.width = '94%'
    main.style.width = '94%'
    footer.style.width = '94%'
    if(window.innerWidth > 1198) {
        hero.style.backgroundPositionY = '-570px'
        hero.style.backgroundPositionX = '0'
    } else if(window.innerWidth < 1198 && window.innerWidth > 1100) {
        hero.style.backgroundPositionY = '-570px'
        hero.style.backgroundPositionX = '-150px'
    } else if(window.innerWidth < 1198 && window.innerWidth > 835) {
        hero.style.backgroundPositionY = '-400px'
        hero.style.backgroundPositionX = '-170px'
    }
    
})

const search = document.querySelector('.sidebar .sidebar-list .wrap i')
search.addEventListener('click', function() {
    document.querySelector('.sidebar .sidebar-list .wrap').style.paddingRight = '70px'
    document.querySelector('.sidebar .sidebar-list .wrap input').style.float = 'right'
    document.querySelector('.sidebar .sidebar-list .wrap input').style.opacity = '1'
    search.style.transform = ('translateX(-30px)')
    search.style.color = '#c3c3c37d'
})    

function HideSearch() {
    document.querySelector('.sidebar .sidebar-list .wrap input').style.opacity = '0'
    setTimeout(function() {
        document.querySelector('.sidebar .sidebar-list .wrap input').style.float = 'left'
        document.querySelector('.sidebar .sidebar-list .wrap').style.paddingRight = '29px'
        search.style.transform = ('translateX(0)')
        search.style.color = '#000'
    },350)
}

main.firstElementChild.addEventListener('click', function() {
    HideSearch()
})


window.addEventListener('scroll',function(e) {
    if(window.scrollY > 30) {
        document.querySelector('.navbar').classList.add('green')
    } else {
        document.querySelector('.navbar').classList.remove('green')
    }
})



//! About
const mainAbout = document.querySelector('.main-about')
window.addEventListener('resize', function(e) {
    if(e.target.innerWidth <= 950) {
        mainAbout.children[0].style.width = '80%'
    } else {
        mainAbout.children[0].style.width = '50%'
    }

})