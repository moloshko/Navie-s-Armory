let header = document.querySelector("header")
let start_btn = document.querySelector("#start_btn")
let main = document.querySelector("main")
let click_img = document.querySelector(".click-img")
let weapon = document.querySelector(".weapon")
let update = document.querySelector(".update")
let weapon_count = 200
let count1 = 1
let count2 = 0
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
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
        update.innerHTML = + 2 
        weapon.innerHTML = weapon_count
    }
    setInterval(()=>{
        count2=2
        weapon_count+=count2
        weapon.innerHTML= weapon_count
},1000)
})