var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
   var x = document.getElementsByClassName("imgslide"); 
    if (x.length>0){
        
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        x[slideIndex-1].style.display = "block";  
        }
    }


//Changing Images
if (document.querySelector("#redesign")){
   var redesignlink=document.querySelector("#redesign")
var responsivelink=document.querySelector("#responsive")
var imagechange=document.querySelector("#mod")

redesignlink.addEventListener('mouseover', function(){
    imagechange.src="img/kilke.png"
})

responsivelink.addEventListener('mouseover', function(){
    imagechange.src="img/modern.png"
}) 
}



if (document.querySelector("#withoutw")){
   var withoutwlink=document.querySelector("#withoutw")
var bikinglink=document.querySelector("#biking")
var imagechange1=document.querySelector("#mod1")

withoutwlink.addEventListener('mouseover', function(){
    imagechange1.src="img/ww.png"
})

bikinglink.addEventListener('mouseover', function(){
    imagechange1.src="img/bike.png"
}) 
}

if (document.querySelector("#simple")){
   var simplelink=document.querySelector("#simple")
var storytellinglink=document.querySelector("#storytelling")
var pplink=document.querySelector("#pp")
var etlink=document.querySelector("#et")
var imagechange2=document.querySelector("#mod2")
var imagechange3=document.querySelector("#mod2")

simplelink.addEventListener('mouseover', function(){
    imagechange2.src="img/lacis.png"
})

storytellinglink.addEventListener('mouseover', function(){
    imagechange2.src="img/trouble.png"
}) 

pplink.addEventListener('mouseover', function(){
    imagechange3.src="img/calc.png"
})
    etlink.addEventListener('mouseover', function(){
    imagechange3.src="img/et.png"
}) 
}