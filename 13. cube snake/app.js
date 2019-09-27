let mySnake;
let myFunctionList;
let funList = [];
const movementArray = ["right", "left", "up", "down"];
//add snake to body tag
document.addEventListener("DOMContentLoaded", function(){
    console.log("ready");
    mySnake = document.createElement("div");
    mySnake.textContent = "hello World!";
    mySnake.style.width = "100px";
    mySnake.style.height = "100px";
    mySnake.style.backgroundColor="#ff0000";
    mySnake.style.color = "#fff";

    mySnake.style.lineHeight= "100px";
    mySnake.style.textAlign = "center";
    mySnake.style.position = "absolute";
    mySnake.style.top = "100px";
    mySnake.style.left = "150px";
    
    document.body.appendChild(mySnake);
    myFunctionList = document.createElement("div");
    document.body.appendChild(myFunctionList);
})

document.addEventListener("keydown", function(e){
    e.preventDefault();
    let keyC = e.keyCode;
    if(keyC===37) {
        addFun("left");
    }
    else if (keyC===39) {
        addFun("right");
    }
    else if (keyC===38) {
        addFun("up");
    }
    else if (keyC===40) {
        addFun("down");
    }
    else if (keyC===67) {
        mySnake.style.backgroundColor=randomColor();
    }else if (keyC === 82) {
        let temp =
        movementArray[Math.floor(Math.random()*movementArray.length)];
        addFun(temp);
    }
    else if (keyC===13 || keyC===32) {
        mover();
    }
   // console.log(e.keyCode);
})

function mover(){
    if(funList.length>0){
        let cur = mySnake.getBoundingClientRect();
        let el = funList.shift();
        let item = el.textContent.replace("+","");
        myFunctionList.removeChild(el);
        mySnake.innerHTML = "Move:" + item;
        if(item == "left"){
            mySnake.style.left = cur.left - cur.width + "px";
        }
        if(item == "right"){
            mySnake.style.left = cur.left + cur.width + "px";
        }
        if(item == "up"){
            mySnake.style.top = cur.top - cur.width + "px";
        }
        if(item == "down"){
            mySnake.style.top = cur.top + cur.width + "px";
        }
        setTimeout(mover, 300);
    }else{
        mySnake.innerHTML = "Set Path";
        return;
    }
}

function addFun(val){
    let span = document.createElement("span");
    span.textContent = "+" + val;
    span.style.pading = "10px";
    span.style.border = "1px solid #ddd";
    span.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#f00"
        this.style.color = "#fff"
        
    })
    span.addEventListener("mouseout", function(){
        this.style.backgroundColor = "#fff"
        this.style.color = "#000"
        
    })

    span.addEventListener("click", function(){
        let curIndex = funList.indexOf(this);
        console.log(curIndex);
        let tempRemove = funList.splice(curIndex, 1);
        console.log(tempRemove);
        myFunctionList.removeChild(this);
    })
    myFunctionList.appendChild(span);
    funList.push(span);
    console.log(funList);
    //myFunctionList
}

function randomColor(){
    return "#"+Math.random().toString(16).substr(-6);
}
function goLeft(){
    let temp = mySnake.offsetLeft;
    temp = temp-50;
    mySnake.style.left = temp + "px";
}
function goRight(){
    let temp = mySnake.offsetLeft;
    temp = temp+50;
    mySnake.style.left = temp + "px";
}
function goUp(){
    let temp = mySnake.offsetTop;
    temp = temp-50;
    mySnake.style.top = temp + "px";
}
function goDown(){
    let temp = mySnake.offsetTop;
    temp = temp+50;
    mySnake.style.top = temp + "px";
}
