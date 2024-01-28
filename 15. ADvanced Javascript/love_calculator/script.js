const startPoint = document.querySelector("body").innerHTML;
const someNumber=()=>{
    return Math.round(Math.random() * 100) + 1;
}
const showResult = ()=>{
    let matchResult = someNumber();
    if(matchResult > 80){
        matchResult = `You are a perfect match your result is: ${matchResult}`;
    }else if(matchResult > 60){
        matchResult = `You are compatible your result is: ${matchResult}`;
    }else{
        matchResult = `Dont even try your result is low: ${matchResult}`;
    }
    
document.getElementById("form-matchResult").innerHTML = `<div>${matchResult}</div>
<h2>for more tries tap any key.</h2><button onclick ="refreshPage()">again</button>`;
}
const refreshPage = ()=>{
    document.querySelector("body").innerHTML = startPoint;
}
