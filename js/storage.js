const cache_cemara = "History Like Cemara"
const cache_kaktus = "History Like Kaktus"
const cache_senthe = "History Like Senthe"
const cache_mdBonsai = "History Like Medium Bonsai"
const cache_mcBonsai = "History Like Micro Bonsai"
const cache_lgBonsai = "History Like Large Bonsai"
const cache_mkaktus = "History Like Mini Kaktus"

//Cemara
function InHistoryCemara() {
    if(localStorage.getItem(cache_cemara) === "undefined") {
        //jika belum ada maka nilai awalnya akan diatur menjadi 0
        localStorage.setItem(cache_cemara, 0)
    }
    let number = localStorage.getItem(cache_cemara)
    number++

    localStorage.setItem(cache_cemara, number)
}
function DecHistoryCemara() {
    let number = localStorage.getItem(cache_cemara)
    number--

    localStorage.setItem(cache_cemara, number)
}

//Senthe
function InHistorySenthe() {
    if(localStorage.getItem(cache_senthe) === "undefined") {
        //jika belum ada maka nilai awalnya akan diatur menjadi 0
        localStorage.setItem(cache_senthe, 0)
    }
    let number = localStorage.getItem(cache_senthe)
    number++

    localStorage.setItem(cache_senthe, number)
}
function DecHistorySenthe() {
    let number = localStorage.getItem(cache_senthe)
    number--

    localStorage.setItem(cache_senthe, number)
}

//Kaktus
function InHistoryKaktus() {
    if(localStorage.getItem(cache_kaktus) === "undefined") {
        //jika belum ada maka nilai awalnya akan diatur menjadi 0
        localStorage.setItem(cache_kaktus, 0)
    }
    let number = localStorage.getItem(cache_kaktus)
    number++

    localStorage.setItem(cache_kaktus, number)
}
function DecHistoryKaktus() {
    let number = localStorage.getItem(cache_kaktus)
    number--

    localStorage.setItem(cache_kaktus, number)
}

//MD Bonsai
function InHistoryMD() {
    if(localStorage.getItem(cache_mdBonsai) === "undefined") {
        //jika belum ada maka nilai awalnya akan diatur menjadi 0
        localStorage.setItem(cache_mdBonsai, 0)
    }
    let number = localStorage.getItem(cache_mdBonsai)
    number++

    localStorage.setItem(cache_mdBonsai, number)
}
function DecHistoryMD() {
    let number = localStorage.getItem(cache_mdBonsai)
    number--

    localStorage.setItem(cache_mdBonsai, number)
}

//MC Bonsai
function InHistoryMC() {
    if(localStorage.getItem(cache_mcBonsai) === "undefined") {
        //jika belum ada maka nilai awalnya akan diatur menjadi 0
        localStorage.setItem(cache_mcBonsai, 0)
    }
    let number = localStorage.getItem(cache_mcBonsai)
    number++

    localStorage.setItem(cache_mcBonsai, number)
}
function DecHistoryMC() {
    let number = localStorage.getItem(cache_mcBonsai)
    number--

    localStorage.setItem(cache_mcBonsai, number)
}

//LG Bonsai
function InHistoryLG() {
    if(localStorage.getItem(cache_lgBonsai) === "undefined") {
        //jika belum ada maka nilai awalnya akan diatur menjadi 0
        localStorage.setItem(cache_lgBonsai, 0)
    }
    let number = localStorage.getItem(cache_lgBonsai)
    number++

    localStorage.setItem(cache_lgBonsai, number)
}
function DecHistoryLG() {
    let number = localStorage.getItem(cache_lgBonsai)
    number--

    localStorage.setItem(cache_lgBonsai, number)
}

//Mini Kaktus
function InHistoryMini() {
    if(localStorage.getItem(cache_mkaktus) === "undefined") {
        //jika belum ada maka nilai awalnya akan diatur menjadi 0
        localStorage.setItem(cache_mkaktus, 0)
    }
    let number = localStorage.getItem(cache_mkaktus)
    number++

    localStorage.setItem(cache_mkaktus, number)
}
function DecHistoryMini() {
    let number = localStorage.getItem(cache_mkaktus)
    number--

    localStorage.setItem(cache_mkaktus, number)
}