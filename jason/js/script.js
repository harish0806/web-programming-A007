// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = "Addition of :"
                res.firstName + " " + res.lastName
              if (res.addition) {
              var message1 = res.firstName+res.lastName;
                message += " = " res.message1;
              }
              else {
                message += " not found!";
              }
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
