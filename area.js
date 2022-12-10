var sideOne = document.querySelector("#first-side");
var sideTwo = document.querySelector("#second-side");
var sideThree = document.querySelector("#third-side");
var calculateAreabtn = document.querySelector(".btn-check");
var output = document.querySelector("#output");


calculateAreabtn.addEventListener("click", function calculateArea() {
  
    var sideOneValue = Number(sideOne.value);
    var sideTwoValue = Number(sideTwo.value);
    var sideThreeValue = Number(sideThree.value);
    var sP =
        (sideOneValue + sideTwoValue + sideThreeValue) / 2;
  
    var result = Math.sqrt(sP *(sP - sideOneValue) *(sP - sideTwoValue) *(sP - sideThreeValue));
      
    output.innerText = `Area of a triangle is ${result}`;
  });