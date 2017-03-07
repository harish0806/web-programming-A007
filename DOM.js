function sayHello () {
  var cnt= 0;
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
    if(cnt==0)
    {
    title +=" & Batch A1!";
      cnt+=cnt;
    }
    document
        .querySelector("h1")
        .textContent = title;
  }
  else {
    cnt=0;
    var title = 
      document
        .querySelector("#title")
        .textContent;
      document
        .querySelector("h1")
        .textContent = title;
  }
}
