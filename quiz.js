var quizform=document.querySelector(".quiz-form");
var submitAns=document.querySelector("#submit-ans");
var output1=document.querySelector("#output");


var correctAns=["90°","Right triangle"];


submitAns.addEventListener("click",function calculateScore(){
    var score =0;
    var i=0;
    var formResults=new FormData(quizform);
    for(let value of formResults.values()){
        if(value===correctAns[i]){
            score++;
        }
        i++;
    }
    output1.innerHTML="Your score is " + score;
})
