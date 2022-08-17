var color;
const fillArea = document.getElementsByClassName("fill-area");
// var globalC;
const colorPallet = document.getElementsByClassName("small-circles");
colorPallet[0].style.backgroundColor = "red";
colorPallet[1].style.backgroundColor = "green";
colorPallet[2].style.backgroundColor = "black";
colorPallet[3].style.backgroundColor = "blue";
colorPallet[4].style.backgroundColor = "pink";
const rect1 = document.getElementById("rect1");
const rect2 = document.getElementById("rect2");
const rect3 = document.getElementById("rect3");
const rect4 = document.getElementById("rect4");
const rect5 = document.getElementById("rect5");
const rect6 = document.getElementById("rect6");
const rect7 = document.getElementById("rect7");
const rect8 = document.getElementById("rect8");
const rect9 = document.getElementById("rect9");
const rect10 = document.getElementById("rect10");
const square = document.getElementById("square1");
const triangle1 = document.getElementById("triangle1");
const triangle2 = document.getElementById("triangle2");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");

for(var i=0; i<fillArea.length; i++){
    fillArea[i].addEventListener("click", function(){
        // console.log(color, i);
        this.style.backgroundColor = color;
    });
}

for(var i=0; i<colorPallet.length; i++){
    colorPallet[i].addEventListener("click", function() {
        setColor(this);
    });
};

function setColor(_this){
    var currentColor = _this.style.backgroundColor;
    color = currentColor;  
    // console.log(color);
};