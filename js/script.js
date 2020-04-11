const date = new Date()
const hari = date.toLocaleString()

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
        footer.classList.toggle('view')
    }
})