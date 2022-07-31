let btn=document.querySelector("button");
btn.onclick=function()
{
    btn.parentElement.style.backgroundColor="yellow";
    console.log(btn.parentElement.parentElement.parentElement);
    console.log(btn.parentNode.parentNode.parentNode);
}