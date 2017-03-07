var cnt=0;
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      console.log(event);

      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>detail: " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "btech it" && cnt==0) {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & batch A1!";
	cnt++;
        document
            .querySelector("h1")
            .textContent = title;
      }
	else{
	var title= "A007 (2)";
	document
            .querySelector("h1")
            .textContent = title;
	}
    }

    // Unobtrusive event binding

    document.querySelector("button")
      .addEventListener("click", sayHello);

    document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );

  }
);

