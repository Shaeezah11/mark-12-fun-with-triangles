var inputSide=document.querySelectorAll(".side-input");
var hypotenuseBttn=document.querySelector("#hypotenuse-btn");
var output=document.querySelector("#output");

function calculateSumOfSquares(a,b){
    var sumOfSquares= a*a+b*b;
    return sumOfSquares ;
}


hypotenuseBttn.addEventListener("click",function calculateHypotenuse(){
    var sumOfSquares=calculateSumOfSquares(Number(inputSide[0].value),Number(inputSide[1].value));
    var lenghtOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText="The length of Hypotenuse is " + lenghtOfHypotenuse;


});