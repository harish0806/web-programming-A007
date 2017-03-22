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
         
                 
              if ( temp === res.student1) {
             
                var temp2= res.course1;
                
              }
              else if (temp === res.student2) {
               
                var temp2= res.course2;
              }
      
  
   
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + temp2+ "</h2>";
            });
      });
  
  }
);      
