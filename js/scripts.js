var encryptInput = function(message) {
  return message;
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
