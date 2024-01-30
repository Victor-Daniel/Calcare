var menu = document.getElementById("burguer");
menu.addEventListener("click",function (){
   var element = document.getElementById("Menu");
   if(element.style.display==="block"){
       element.style.display="none";
   }
   else {
       element.style.display="block";
   }

});
