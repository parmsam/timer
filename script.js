//based on w3schools example
//https://www.w3schools.com/howto/howto_js_countdown.asp
//Coding train provides great explainantion too
//https://www.youtube.com/watch?v=MLtAMg9_Svw&ab_channel=TheCodingTrain

// Set the time we're counting down to
var countDownTime = new Date();
//specify number of minutes left
var timeLeft = 0; //0 minute left initial

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
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s" ;

  // If the count down is finished, write some text
  if (distance < 5000 && distance > 0){
    playSound('bump');
  }
  if (distance < 0) {
    //clearInterval(x);
    document.getElementById("timer").innerHTML = "TIME IS UP";
    //alert("Your time is up!");
  }
}, 1000);
//every 1000 ms = 1 sec
var current = new Date().getTime();

//better time formatted time function based on stackoverflow post
//https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
var formatAMPM =  function (date,time_diff=0) {
  date.setMinutes( date.getMinutes() + time_diff)
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function set_start_end(time_diff) {
    var button_time = new Date();
    document.getElementById("start_time").innerHTML=
          // formatAMPM(button_time.getHours().toString()+button_time.getMinutes().toString())
          formatAMPM(button_time)
    ;
    document.getElementById("end_time").innerHTML=
          //formatAMPM(button_time.getHours().toString()+(button_time.getMinutes()+time_diff).toString())
          formatAMPM(button_time, time_diff)
    ;
}
