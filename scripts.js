

let i;
i = 1;
while ( i < 5 ) {
  $("#response").append("<br />" + i);
  i = i + 1;
}

let userInput;
userInput = prompt("Please pick a number between 1 and 4.", "Type your answer here.");
if userInput ( i < 4 ) {
  $("#response").html("<br />" + i);
  i = i + 1;
}
