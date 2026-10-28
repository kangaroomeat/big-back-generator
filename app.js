const generateBtn = document.querySelector(".generator-btn");
var generatorDisplay = document.querySelector(".generator-display p");


generateBtn.onclick=function(){
    
    randomRestaurantGenerator();
}

var restaurants = ["wendy's", "taco bell", "burger king"];

function generateRandNum(){
   var randNum =  Math.floor(Math.random() * 3)
   return randNum;
}

function randomRestaurantGenerator(){
    var randNum = Math.floor(Math.random() * 3);

    var randomRestaurant = restaurants[randNum];

    generatorDisplay.innerText = randomRestaurant
   




}

