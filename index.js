let cliName = document.getElementById("info1")
let subBtn = document.getElementById("sub-btn")
let retBtn = document.getElementById("return-btn")
let conText = document.getElementById("con-text")
let info2 = document.getElementById("info2")
let info3 = document.getElementById("info3")
let info4 = document.getElementById("info4")
let messDet = document.getElementById("mess-det")

subBtn.addEventListener("click",function() {
    if (cliName.value && info2.value && info3.value && info4.value) {
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
         info2.value=""
         info3.value=""
         info4.value=""
         cliName.value=""
         messDet.value=""
    }
})

retBtn.addEventListener("click", function() {
    document.getElementById("pop-div").classList.remove('open-pop')
    window.location.reload()
})

let commentSec = document.getElementById("comment-sec")
const postTime = new Date().toLocaleTimeString("en-US",{timeStyle:'short'});
const postDate = new Date().toLocaleDateString();
// const timeAgo = new Intl.RelativeTimeFormat('en')
// const diff = new Date().getSeconds() - 0
// const format = timeAgo.format(-diff, 'seconds')
// console.log(format)


let comrev=[]
// localStorage.clear()
let cusRevLocalStorage= JSON.parse(localStorage.getItem("cusrev"))

if (cusRevLocalStorage) {
    comrev=cusRevLocalStorage
    putText(comrev)
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
        commentSec.value= ''
        localStorage.setItem("cusrev", JSON.stringify(comrev))
    }
})



function putText(arrText) {
    let revItem=``
    arrText.map((detail)=> {
        revItem +=`
        <div class="comm-box">
            <img src="unknown.jpeg" id="rev-img" alt="">
            <div class="rev-box">
                ${detail.text}
            </div>
            <div class="time-box">
             Posted: ${detail.time}, ${detail.date}
            </div>
        </div>`
        document.getElementById('cus-rev').innerHTML = revItem
        document.getElementById('see-com').innerHTML = revItem
    });
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
