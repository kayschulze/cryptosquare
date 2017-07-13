var sizeUpSquare = function(array) {
  return Math.sqrt(array.length);
};

var messageToArray = function(input) {
  return input.split("");
};

var encryptInput = function(message) {
  messageArray = messageToArray(message);
  var encryptedOutput = [];

  squareSize = sizeUpSquare(messageArray);

  numberOfCharacters = messageArray.length;

  encryptedOutput[0] = messageArray[0];
  encryptedOutput[1] = messageArray[2];
  encryptedOutput[2] = messageArray[1];
  encryptedOutput[3] = messageArray[3];

  return encryptedOutput.join("");
};

// Main function calls encryptInput() method and displays answer
$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var message = $("#messageInput").val();

    var encryptedMessage = encryptInput(message);

    $("#outputMessage").text(encryptedMessage);
  });
});
