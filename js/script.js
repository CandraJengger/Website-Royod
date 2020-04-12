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

tabSidebar.addEventListener('click',function() {
    sidebar.style.right = '-100px'
})

window.addEventListener('scroll',function(e) {
    if(window.scrollY > 30) {
        document.querySelector('.navbar').classList.add('white')
    } else {
        document.querySelector('.navbar').classList.remove('white')
    }
})
