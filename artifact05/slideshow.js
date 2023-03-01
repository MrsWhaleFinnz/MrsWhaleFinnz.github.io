var myImages =["https://raw.githubusercontent.com/MrsWhaleFinnz/MrsWhaleFinnz.github.io/main/artifact05/Persona.jpg","https://raw.githubusercontent.com/MrsWhaleFinnz/MrsWhaleFinnz.github.io/main/artifact05/Persona2.jpg","https://raw.githubusercontent.com/MrsWhaleFinnz/MrsWhaleFinnz.github.io/main/artifact05/Persona3.jpg","https://raw.githubusercontent.com/MrsWhaleFinnz/MrsWhaleFinnz.github.io/main/artifact05/Persona4.jpg","https://raw.githubusercontent.com/MrsWhaleFinnz/MrsWhaleFinnz.github.io/main/artifact05/Persona5.jpg"];


var captionImages =["Persona - Playstation","Persona2 - Playstation","Persona3 - Playstation","Persona4 - Playstation4","Persona5 - Playstation5"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
