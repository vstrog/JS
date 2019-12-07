const mainEle = document.querySelectorAll(".main");
const conEle = document.querySelectorAll(".content");
for(let x=0;x<mainEle.length;x++){
    mainEle[x].addEventListener("click",function(){
        console.log(mainEle[x].nextElementSibling);
        clearActive();
        mainEle[x].nextElementSibling.classList.add("active");
    })
}
 
function clearActive(){
    for(let x=0;x<conEle.length;x++){
        conEle[x].classList.remove("active");
    }
}