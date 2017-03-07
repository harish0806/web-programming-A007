function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Details: " + name + "!</h2>";


  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "btech it") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Batch A1!";
    document
        .querySelector("h1")
        .textContent = title;
  }
  else {
    var title = 
      document
        .querySelector("#title")
        .textContent;
      document
        .querySelector("h1")
        .textContent = title;
  }
}
