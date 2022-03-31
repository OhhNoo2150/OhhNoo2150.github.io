let mouseCursor = document.querySelector(".cursor")
let lis = document.querySelectorAll("body")

window.addEventListener("mouseover", cursor)

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}