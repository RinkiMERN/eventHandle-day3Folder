//eventHandling custom event
let btn=document.querySelector("button");
// let customEvent=new Event("mernEvent");
// btn.addEventListener("mernEvent", e=>{
//     console.log(e);
// })

// btn.dispatchEvent(customEvent);
// btn.addEventListener("click",e => {console.log(e);})

// function randomNumber(num){
//     return Math.round(Math.random()*(num+1));
// }

//first by click
// btn.addEventListener("click", e =>{
//     let rgbaValue = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
//     document.body.style.background=rgbaValue;
// })

//second by mouseEnter

// btn.addEventListener("mouseenter", e =>{
//     let rgbaValue = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
//     document.body.style.background=rgbaValue;
// })

//target --> on which element we are clicking

btn.addEventListener("mouseenter", e=>{
    console.log("mouse entered");
    e.target.style.color="#fff";
    e.target.style.width="100%";
    e.target.style.background="crimson";
    e.target.style.transition="ease-in 2s";
})
btn.addEventListener("mouseleave", e=>{
    console.log("mouse entered");
    e.target.style.color="#fff";
    e.target.style.width="auto";
    e.target.style.background="green";
    // e.target.style.transitionProperty="width";
    e.target.style.transition="linear 1s";
})
