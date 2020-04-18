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
    search.style.transform = 'translateX(-10px,0)'

    if(window.innerWidth > 1198) {
        if(hero != null) {
            hero.style.backgroundPositionY = '-540px'
            hero.style.backgroundPositionX = '100px'
        }
        
        HideSearch()
    } else if(window.innerWidth < 1198 && window.innerWidth > 1100) {
        if(hero != null) {
            hero.style.backgroundPositionY = '-540px'
            hero.style.backgroundPositionX = '50px'
        }
        HideSearch()
    } else if(window.innerWidth < 1100 && window.innerWidth > 835) {
        if(hero != null) {
            hero.style.backgroundPositionY = '-360px'
            hero.style.backgroundPositionX = '-20px'
        }
        HideSearch()
    }  else if(window.innerWidth <= 835) {
        tabOpen.style.display = 'none'
    }
})



tabOpen.addEventListener('click', function() {
    sidebar.style.right = '0'
    tabOpen.style.display = 'none'
    navbar.style.width = '94%'
    main.style.width = '94%'
    footer.style.width = '94%'
    search.style.transform = 'translateX(-10px,0)'
    if(window.innerWidth > 1198) {
        if(hero != null) {
            hero.style.backgroundPositionY = '-570px'
            hero.style.backgroundPositionX = '0'
        }
        
    } else if(window.innerWidth < 1198 && window.innerWidth > 1100) {
        if(hero != null) {
            hero.style.backgroundPositionY = '-570px'
            hero.style.backgroundPositionX = '-150px'
        }
    } else if(window.innerWidth < 1198 && window.innerWidth > 835) {
        if(hero != null) {
            hero.style.backgroundPositionY = '-400px'
            hero.style.backgroundPositionX = '-170px'
        }
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
    if(window.innerWidth > 835) {
        HideSearch()
    }
})


window.addEventListener('scroll',function(e) {
    if(window.scrollY > 30) {
        document.querySelector('.navbar').classList.add('green')
    } else {
        document.querySelector('.navbar').classList.remove('green')
    }
})


//! Make Responsive to Mobile
const navLinks = navbar.querySelector('.nav-links')
const sidebarList = sidebar.children[0]

const times = document.createElement('i')
times.setAttribute('class', 'fas fa-times')

const wrapSearch = sidebarList.querySelector('.wrap')

const stream = sidebarList.querySelector('.fa-stream')

window.addEventListener('load',function() {
    if(window.innerWidth <= 835) {


        sidebarList.style.paddingLeft = "40px"
        sidebar.style.width = "0px"
        sidebar.style.backgroundColor = "#fff"
        navbar.style.width = '100%'
        main.style.width = '100%'
        footer.style.width = '100%'

        sidebarList.insertBefore(navLinks, wrapSearch)
        sidebarList.insertBefore(times, navLinks)
            
        
        

        navbar.appendChild(stream)
     
    }else {
        if(sidebarList.children[0] == times) {
            sidebarList.removeChild(times)
        } else {
            sidebarList.style.paddingLeft = "0px"
            stream.setAttribute('id','stream')
            sidebarList.insertBefore(stream, wrapSearch)
            navbar.appendChild(navLinks)
        }

        navbar.style.width = '94%'
        main.style.width = '94%'
        footer.style.width = '94%'
        sidebar.style.right = "0"
        sidebar.style.width = "80px"
    }
})

times.addEventListener('click', function() {
    sidebar.style.right = '-400px'
    navbar.style.width = '100%'
    main.style.width = '100%'
    footer.style.width = '100%'
})

stream.addEventListener('click', function() {
    
    if(window.innerWidth <= 835) {
        sidebar.style.width = '300px'
        sidebar.style.right = '0'
        search.style.transform = ('translate(-35px,12px)')
    } else {
        search.style.transform = ('translate(-10px,0px)')
    }
})

window.addEventListener('resize', function() {
    if(window.innerWidth <= 835) {
        stream.setAttribute('id','stream2')

        sidebarList.style.paddingLeft = "40px"
        sidebar.style.width = "0px"
        sidebar.style.backgroundColor = "#fff"
        navbar.style.width = '100%'
        main.style.width = '100%'
        footer.style.width = '100%'

        sidebarList.insertBefore(navLinks, wrapSearch)
        if(sidebarList.children[0] == navLinks) {
            setTimeout(function(){
                 sidebarList.insertBefore(times, navLinks)
            }, 500)
        }
        
        wrapSearch.querySelector('input').style.opacity = '1'
        navbar.appendChild(stream)
     
    }  else {
        if(sidebarList.children[0] == times) {
            sidebarList.removeChild(times)
        } else {
            sidebarList.style.paddingLeft = "0px"
            sidebar.style.width = "80px"
            stream.setAttribute('id','stream')
            sidebarList.insertBefore(stream, wrapSearch)
            navbar.appendChild(navLinks)
            wrapSearch.querySelector('input').style.opacity = '0'
            search.style.transform = ('translate(-10px,0)')

            navbar.style.width = '94%'
            main.style.width = '94%'
            footer.style.width = '94%'
            sidebar.style.right = "0"
            sidebar.style.width = "80px"
            
        }
     }
})
