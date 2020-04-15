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
        // hero.style.backgroundPositionY = '-540px'
        // hero.style.backgroundPositionX = '100px'
    } else if(window.innerWidth < 1198 && window.innerWidth > 1100) {
        // hero.style.backgroundPositionY = '-540px'
        // hero.style.backgroundPositionX = '50px'
    } else if(window.innerWidth < 1100 && window.innerWidth > 835) {
        // hero.style.backgroundPositionY = '-360px'
        // hero.style.backgroundPositionX = '-20px'
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
        // hero.style.backgroundPositionY = '-570px'
        // hero.style.backgroundPositionX = '0'
    } else if(window.innerWidth < 1198 && window.innerWidth > 1100) {
        // hero.style.backgroundPositionY = '-570px'
        // hero.style.backgroundPositionX = '-150px'
    } else if(window.innerWidth < 1198 && window.innerWidth > 835) {
        // hero.style.backgroundPositionY = '-400px'
        // hero.style.backgroundPositionX = '-170px'
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

const figcaption = document.querySelectorAll('.main-products #content .card figcaption') 
const cemara = figcaption[0].querySelector('.nilai1')
const kaktus = figcaption[1].querySelector('.nilai2')
const senthe = figcaption[2].querySelector('.nilai3')
const mdBonsai = figcaption[3].querySelector('.nilai4')
const mcBonsai = figcaption[4].querySelector('.nilai5')
const lgBonsai = figcaption[5].querySelector('.nilai6')
const mKaktus = figcaption[6].querySelector('.nilai7')


function ShowLike() {
    cemara.innerText = localStorage.getItem(cache_cemara)
    kaktus.innerText = localStorage.getItem(cache_kaktus)
    senthe.innerText = localStorage.getItem(cache_senthe)
    mdBonsai.innerText = localStorage.getItem(cache_mdBonsai)
    mcBonsai.innerText = localStorage.getItem(cache_mcBonsai)
    lgBonsai.innerText = localStorage.getItem(cache_lgBonsai)
    mKaktus.innerText = localStorage.getItem(cache_mkaktus)
}

ShowLike()


figcaption.forEach(function(even) {
    even.addEventListener('click',function(e) {
        if(typeof(Storage) !== "undefined") {
            if(e.target.style.color == 'rgb(245, 42, 42)') {
                e.target.style.color = 'rgba(0, 0, 0, 0.4)'
                if(e.target.previousElementSibling.classList.contains('nilai1')){
                    DecHistoryCemara()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_cemara)
                } else if(e.target.previousElementSibling.classList.contains('nilai2')) {
                    DecHistoryKaktus()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_kaktus)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai3')) {
                    DecHistorySenthe()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_senthe)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai4')) {
                    DecHistoryMD()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_mdBonsai)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai5')) {
                    DecHistoryMC()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_mcBonsai)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai6')) {
                    DecHistoryLG()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_lgBonsai)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai7')) {
                    DecHistoryMini()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_mkaktus)
                    
                }
            } else {
                e.target.style.color = 'rgb(245, 42, 42)'
                if(e.target.previousElementSibling.classList.contains('nilai1')){
                    InHistoryCemara()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_cemara)
    
                } else if(e.target.previousElementSibling.classList.contains('nilai2')) {
                    InHistoryKaktus()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_kaktus)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai3')) {
                    InHistorySenthe()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_senthe)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai4')) {
                    InHistoryMD()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_mdBonsai)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai5')) {
                    InHistoryMC()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_mcBonsai)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai6')) {
                    InHistoryLG()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_lgBonsai)
    
                }else if(e.target.previousElementSibling.classList.contains('nilai7')) {
                    InHistoryMini()
                    e.target.previousElementSibling.innerText = localStorage.getItem(cache_mkaktus)
                    
                }
            }
        } else {
            alert('Browse tidak mendukung storage')
        }
    })
})


//View
const view = document.querySelector('.main-products .view .wrap-view img')
const card = document.querySelectorAll('.main-products #content .wrap-content article .card')
card.forEach(function(even) {
    even.addEventListener('click', function(e) {
        // if (e.target == i){
        //     view.parentElement.parentElement.style.display = 'none' 
        // }else 
        if(e.target.classList.contains('fas')) {
            e.stopPropagation()
        } else if(e.target.previousElementSibling.src !== null) {
            view.src = e.target.previousElementSibling.src
            view.parentElement.parentElement.style.display = 'block' 
        }
    })
})


// view.nextElementSibling.addEventListener('click',function() {
//     view.parentElement.parentElement.style.display = 'none'
// })
view.parentElement.parentElement.addEventListener('click', function(e){
    if(e.target.getAttribute('src') !== null ) {
        e.stopPropagation()
    }else {
        view.parentElement.parentElement.style.display = 'none'
    }
})