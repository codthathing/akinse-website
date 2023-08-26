let cliName = document.getElementById("info1")
let subBtn = document.getElementById("sub-btn")
let retBtn = document.getElementById("return-btn")
let conText = document.getElementById("con-text")
let infos = document.getElementsByClassName("infos")

subBtn.addEventListener("click", () => {
    for(let x=0; x<infos.length; x++) {
        if (infos[x].value && cliName.value) {
            document.getElementById("pop-div").classList.add('open-pop')
            setTimeout(()=> {
                document.getElementById("pop-sent").classList.add('open-popSent')
                document.getElementById("loader").classList.add("open-loader")
            }, 2000)
        
            conText.innerHTML=`
             Congrats! <br>
             <span style="font-weight: bold;">${cliName.value}</span><br> 
             your request is been processed. 
             `
        }
    }
})

retBtn.addEventListener("click", function() {
    document.getElementById("pop-div").classList.remove('open-pop')
    infos.value=""
    window.location.reload()
})




let commentSec = document.getElementById("comment-sec")
const postTime = new Date().toLocaleTimeString("en-US",{timeStyle:'short'});
const postDate = new Date().toLocaleDateString();
let comrev=[]


// localStorage.clear()
let cusRevLocalStorage= JSON.parse(localStorage.getItem("cusrev"))
if (cusRevLocalStorage) {
    comrev=cusRevLocalStorage
    putText(comrev)
    shoText(comrev)
}

document.getElementById("rev-btn").addEventListener("click", function(){
    if (commentSec.value) {
        let textInfo = {
            text: commentSec.value,
            time: postTime,
            date: postDate
        }
        comrev.unshift(textInfo)
        putText(comrev)
        shoText(comrev)
        commentSec.value= ''
        localStorage.setItem("cusrev", JSON.stringify(comrev))
    }
})



function putText(arrText) {
    let revItem=``
    arrText.map((detail)=> {
        revItem +=`
        <div class="comm-box">
            <img src="icons/unknown.jpeg" id="rev-img" alt="">
            <div class="rev-box">
                ${detail.text}
            </div>
            <div class="time-box">
             Posted: ${detail.time}, ${detail.date}
            </div>
        </div>`
        document.getElementById('see-com').innerHTML = revItem
    });
}
function shoText(array) {
    let shoItem = ``
    for(let x = 0; x<array.length; x++) {
        if(x === 3) {break;}
        shoItem +=`
        <div class="comm-box">
            <img src="icons/unknown.jpeg" id="rev-img" alt="">
            <div class="rev-box">
                ${array[x].text}
            </div>
            <div class="time-box">
             Posted: ${array[x].time}, ${array[x].date}
            </div>
        </div>`
        document.getElementById('cus-rev').innerHTML = shoItem
    }
}


let seeBtn = document.getElementById("see-btn")
seeBtn.addEventListener("click", function() {
        document.getElementById("see-all").classList.add("open-com")
        document.querySelector("body").style.overflow="hidden"
})

document.getElementById("back-btn").addEventListener("click", function() {
    document.getElementById("see-all").classList.remove("open-com")
    document.querySelector("body").style.overflowY="scroll"
})
