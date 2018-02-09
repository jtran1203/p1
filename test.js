//example of an Array
var color= ["red", "orange", "yellow", "green", "blue", "violet"];
for (var i = 0; i < color.length; i++){
  console.log(color[i]);
};

var color= ["red", "orange", "yellow", "green", "blue", "violet"];
var i =0;
while(i<color.length){
console.log (color[i])
i++
};

// the hi-lo game
alert("you have 7 tries to guess the right number");
var random= (Math.floor(Math.random()*100));
var name = prompt("Hi what is your name?");

for (i = 0; i <7; i++){
  var guess = prompt("guess a number 1-100");
  if (isNaN(guess)){
    alert ("please input number you just waste a turn");
  }else if (guess== random){
    alert ("congratulation " + name + " you guess the right number woot woot" );
    break;
  }else if (guess <random){
    alert("your number is to low" );
  }else {
    alert ("your number is to high");
  }
}
