let x=document.getElementById("demo");

//firstChild will create plain text
console.log(x.firstChild = "krishna");

//firstElementChild     --> first element as a output
console.log(x.firstElementChild);
console.log(x.firstElementChild.textContent="Rinki");

//childNodes ==> entire child even plain text also ouput is nodelist (works as nth-of-type())
console.log(x.childNodes);
//we can fetch by index also
console.log(x.childNodes[3]);
//we can change its text
console.log(x.childNodes[2].textContent="Vaibhavi");

//children --> it will give output as only tags
console.log(x.children);

//sibling --> NextSibling -->NextElementSibling
console.log(x.nextSibling);
console.log(x.nextElementSibling);

//parentElement --> parent of target element 
//parentNode
console.log(x.parentElement);
console.log(x.parentNode);
