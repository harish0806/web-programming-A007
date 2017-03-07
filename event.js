var cnt=0;
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>detail: " + name + "!</h2>";

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
        title += " & Batch A1";
	cnt++;
	}
        document
            .querySelector("h1")
            .textContent = title;
      }
	else 
	{
	var title= "A007 (1)";
	 document
            .querySelector("h1")
            .textContent = title;
	}
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);



// document.querySelector("button")
//   .onclick = sayHello;
