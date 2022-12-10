var inputs=document.querySelectorAll(".angleInput");
var triangleBtn= document.querySelector("#buttonTriangle");
var output= document.querySelector("#output");

function calculateSumofAngle(Angle1,Angle2,Angle3){
    var sum=Angle1+Angle2+Angle3;
    return sum;
}


triangleBtn.addEventListener("click",function isTriangle(){
    var sumofAngles= calculateSumofAngle
    (Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
    );

    if(sumofAngles===180){
        output.innerText="Yay!!The angles form a triangle";
    }
    else{
        output.innerText="Oh no!!The angles don't form  triangle";
    }
    
    //console.log(sumofAngle);

    
})