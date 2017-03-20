// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#button1")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = "Addition of ";
                 message +=  res.firstName + " and " + res.lastName +" is ";       
           var message1 = res.firstName+res.lastName;
              if (res.addition) {
             
                message +=  message1;
              }
              else {
                message += " not found!";
              }
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  document.querySelector("#button2")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = "Subtraction of ";
                 message +=  res.firstName + " and " + res.lastName +" is ";       
           var message1 = res.firstName-res.lastName;
              if (res.addition) {
             
                message +=  message1;
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
