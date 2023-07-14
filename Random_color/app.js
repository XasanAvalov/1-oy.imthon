function random_color() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}

const form = document.querySelector("form");
const body = document.querySelector("body");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let color_random = random_color();
    body.style.cssText = `background-color: ${color_random}`;
})