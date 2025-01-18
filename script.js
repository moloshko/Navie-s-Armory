let header = document.querySelector("header")
let start_btn = document.querySelector("#start_btn")
let main = document.querySelector("main")
let click_img = document.querySelector(".click-img")
let weapon = document.querySelector(".weapon")
let update = document.querySelector(".update")
let weapon_count = 20000
let count1 = 1
let count2 = 0
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")
let btn7 = document.querySelector(".btn7")
let btn8 = document.querySelector(".btn8")
let btn9 = document.querySelector(".btn9")
let btn10 = document.querySelector(".btn10")
// обработка клика на кнопке -- Start --
start_btn.addEventListener("click", () => {
    header.style.display="none"
    main.style.display="flex"
    document.querySelector("body").style.backgroundImage="url(./Img/Wallpaper.png)"
    document.querySelector("body").style.alignItems="flex-start"
})
click_img.addEventListener("click", () => {
    weapon_count+=count1
    weapon.innerHTML = weapon_count
    //console.log(weapon_count)
    if (weapon_count % 2 === 1 ) {
        click_img.innerHTML = "<img src='./Img/ClickActive.png'>"
    }
    else {
        click_img.innerHTML = "<img src='./Img/ClickHover.png'>"
    }
})
btn1.addEventListener("click", () => {
    if (weapon_count >= 100) {
        count1+=1
        weapon_count-=100
    }
})
btn2.addEventListener("click", () => {
    if (weapon_count >= 200) {       
        weapon_count-=200
        update.innerHTML = count2 +2
        weapon.innerHTML = weapon_count
        
    }
    setInterval(()=>{
        count2=2
        weapon_count+=count2
        weapon.innerHTML= weapon_count
},1000)
})
btn3.addEventListener("click", () => {
    if (weapon_count >= 300) {
        count1+=3
        weapon_count-=300
    }
})
btn4.addEventListener("click", () => {
    if (weapon_count >= 400) {       
        weapon_count-=400
        update.innerHTML = count2 +4
        weapon.innerHTML = weapon_count
        
    }
    setInterval(()=>{
        count2=4
        weapon_count+=count2
        weapon.innerHTML= weapon_count
},1000)
})
btn5.addEventListener("click", () => {
    if (weapon_count >= 500) {
        count1+=5
        weapon_count-=500
    }
})
btn6.addEventListener("click", () => {
    if (weapon_count >= 600) {       
        weapon_count-=600
        update.innerHTML = count2 +6
        weapon.innerHTML = weapon_count
        
    }
    setInterval(()=>{
        count2=6
        weapon_count+=count2
        weapon.innerHTML= weapon_count
},1000)
})
btn7.addEventListener("click", () => {
    if (weapon_count >= 700) {
        count1+=7
        weapon_count-=700
    }
})
btn8.addEventListener("click", () => {
    if (weapon_count >= 800) {       
        weapon_count-=800
        update.innerHTML = count2 +8
        weapon.innerHTML = weapon_count
        
    }
    setInterval(()=>{
        count2=8
        weapon_count+=count2
        weapon.innerHTML= weapon_count
},1000)
})
btn9.addEventListener("click", () => {
    if (weapon_count >= 900) {
        count1+=9
        weapon_count-=900
    }
})
btn10.addEventListener("click", () => {
    if (weapon_count >= 1000) {       
        weapon_count-=1000
        update.innerHTML = count2 +10
        weapon.innerHTML = weapon_count
        
    }
    setInterval(()=>{
        count2=10
        weapon_count+=count2
        weapon.innerHTML= weapon_count
},1000)
})