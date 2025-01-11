let header = document.querySelector("header")
let start_btn = document.querySelector("#start_btn")
let main = document.querySelector("main")

// обработка клика на кнопке -- Start --
start_btn.addEventListener("click", () => {
    header.style.display="none"
    main.style.display="flex"
    document.querySelector("body").style.backgroundColor="#64A8D1"

})