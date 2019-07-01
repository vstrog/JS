const button = document.querySelector("button");
const output = document.querySelector(".output");
output.setAttribute("style", "color:white; width:auto; height:100px; border: black solid 2px; box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75); transition: all .2s;");

button.addEventListener("click", showOutput);
function showOutput(){
    output.style.cssText = "color:white; width:auto; padding-left: 20px; height:100px; border: black solid 2px; box-shadow: 3px 5px 4px 0px rgba(0,0,0,0.75); margin-bottom: 5px; transform: translateX(-1px); transition: all .9s; ";
    const date = new Date();
    let cur = date.getHours();
    let message;
    // cur = 9;
    // cur = 14;
    // cur = 'e';
    if(cur>17){
        message = "Its evening";
        output.style.backgroundColor = "yellow";
    } else if(cur>12){
        message = "Its afternoon";
        output.style.backgroundColor = "green";
    } else if(cur>0){
        message = "Its morning";
        output.style.backgroundColor = "blue";
    } else if(cur==0){
            message = "Its midnight";
            output.style.backgroundColor = "purple";
    } else{
        message = "Something is wrong";
        output.style.backgroundColor = "red";
    }
    output.innerHTML = "<h1>"+message+"</h1>";
}