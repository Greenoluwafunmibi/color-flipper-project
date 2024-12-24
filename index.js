const r = Math.ceil(Math.random()*256);
const g = Math.ceil(Math.random()*256);
const b = Math.ceil(Math.random()*256);



const background = document.querySelector("body");
const button = document.querySelector("button");
const colorCode = document.querySelector(".color-code")

button.addEventListener("click", ()=>{
    const r = Math.ceil(Math.random()*256);
    const g = Math.ceil(Math.random()*256);
    const b = Math.ceil(Math.random()*256);
    background.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
    colorCode.innerHTML=`rgb(${r}, ${g}, ${b})`;
})