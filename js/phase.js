let grandparent=document.querySelector("#grandParent");
let parent=document.querySelector("#parent");
let child=document.querySelector("#child");

// child.addEventListener('click',e=>{
//     console.log('child clicked');
//     console.log(e.eventPhase);
// },{capture:false});

// parent.addEventListener('click',e=>{
//     console.log('parent clicked');
//     console.log(e.eventPhase);
// },{capture:false});

// grandparent.addEventListener('click',e=>{
//     console.log('grandParent clicked');
//     console.log(e.eventPhase);
// },{capture:false});
child.addEventListener('click',e=>{
    console.log('child clicked');
    console.log(e.eventPhase);
},{capture:true});

parent.addEventListener('click',e=>{
    console.log('parent clicked');
    console.log(e.eventPhase);
},{capture:true});

grandparent.addEventListener('click',e=>{
    console.log('grandParent clicked');
    console.log(e.eventPhase);
},{capture:true});