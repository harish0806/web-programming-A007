function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";


  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "B.tech-I.T") {
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
