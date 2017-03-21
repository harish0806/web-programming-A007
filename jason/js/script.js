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
              var temp =
   document.getElementById("name").value;
                 
              if ( temp === "student1") {
             
                temp= res.course1+": "+res.marks11;
                var temp1= res.course2+": "+res.marks12;
              }
              else if (temp === "student2") {
                temp= res.course1+": "+res.marks21;
                var temp1= res.course2+": "+res.marks22;
              }
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + temp+ "</h2>";
          document.querySelector("#content")
                .innerHTML = "<h2>" + temp1+ "</h2>";
            });
      });
  
  }
);
