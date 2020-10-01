//based on w3schools example
//https://www.w3schools.com/howto/howto_js_countdown.asp
//Coding train provides great explainantion too
//https://www.youtube.com/watch?v=MLtAMg9_Svw&ab_channel=TheCodingTrain

// Set the time we're counting down to
var countDownTime = new Date();
//specify number of minutes left
var timeLeft = 0; //10 minute left

countDownTime.setMinutes(countDownTime.getMinutes() + timeLeft)
document.getElementById("timer").innerHTML = "TIME IS UP";
//timeLeft !== 0 &&
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down time
  var distance = countDownTime - now;

  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    //clearInterval(x);
    document.getElementById("timer").innerHTML = "TIME IS UP";
    //alert("Your time is up!");
  }

}, 1000);
//every 1000 ms = 1 sec
var current = new Date().getTime();
// document.getElementById("start_time").innerHTML=current;
