const date = new Date()
const hari = date.toLocaleString()

const time = document.getElementById('time')
function TampilDate() {
    time.innerText = hari
}

TampilDate()