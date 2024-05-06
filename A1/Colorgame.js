var colors = [["Red", "rgb(212, 74, 74)"], ["Blue", "rgb(125, 178, 255)"], ["Yellow","rgb(232, 227, 77)"], ["Green","rgb(74, 212, 97)"]];
var shape = ["12px", "50%"]
var checkmark = document.getElementById("checkmark");
var crossmark = document.getElementById("crossmark");
var correct = document.getElementById("correct");
var count = document.getElementById("count");
var correct_cnt = 0;
var total_count = 0;

function checkInput(color, answer){
  if(color===answer){
    correct_cnt++;
  }
  newRound();
  ++total_count;
  correct.innerHTML = "Richtig: " + correct_cnt;
  count.innerHTML = "Versuche: " + total_count;
}

function newRound(){
  document.getElementById("start").style.display = "none";
  var color = document.getElementById("color");
  var random = Math.floor(Math.random()*4);
  color.innerHTML = colors[random][0];
  var random = Math.floor(Math.random()*4);
  color.style.color = colors[random][1];
  correctAnswer = colors[random][0];
  color.style.display = "block";

  /*if(random%2==0){
    $("#Red").before($("#Blue"));
    $("#Yellow").before($("#Green"));
  }else{
    $("#Blue").before($("#Red"));
    $("#Green").before($("#Yellow"));
  }

  document.getElementById("Red").style.borderRadius = shape[Math.round(Math.random())];
  document.getElementById("Blue").style.borderRadius = shape[Math.round(Math.random())];
  document.getElementById("Yellow").style.borderRadius = shape[Math.round(Math.random())];
  document.getElementById("Green").style.borderRadius = shape[Math.round(Math.random())];*/

  addClick("Red", correctAnswer);
  addClick("Blue", correctAnswer);
  addClick("Yellow", correctAnswer);
  addClick("Green", correctAnswer);
}

function addClick(color, correctAnswer){
  var colorSpan = document.getElementById(color)
  let onclick = "checkInput('".concat(color, "','", correctAnswer,"')");
  colorSpan.setAttribute("onclick", onclick);
}

var countdown = 60;
function startGame(){
  setInterval(timer, 1000);
  newRound();
}

function timer(){
  document.getElementById("time").innerHTML = "Zeit: " + countdown + " sec";
  if(countdown==0){
    clearInterval(timer);
    alert("Test beendet, Ergebnis: " + correct_cnt + "\n Richtigkeitquote: " + (correct_cnt/total_count)*100 + "%");
    location.reload();
  }
  countdown--;
}