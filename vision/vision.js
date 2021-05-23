
         //Get the button
         var mybutton = document.getElementById("myBtn");

         // When the user scrolls down 20px from the top of the document, show the button
         window.onscroll = function() {scrollFunction()};
         
         function scrollFunction() {
           if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
              $("#myBtn").fadeIn("3000");
          mybutton.style.display = "block";
           } else {
             
          mybutton.style.display = "none";
           }
         } 



         function disableScrolling() {
            setTimeout(function() {
              var style = document.createElement("style");
          style.innerHTML = `body::-webkit-scrollbar-thumb {display:none;}`;
          document.body.appendChild(style);
            }, 1000);
        }
          
        function enableScrolling() {
          var style1 = document.createElement("style");
          style1.innerHTML = `body::-webkit-scrollbar-thumb {display:contents}`;
          document.body.appendChild(style1);
        }
        