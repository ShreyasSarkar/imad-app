console.log('Loaded!');
//Change The Text Of The main-text div
var element=document.getElementById('main-text');

element.innerHTML=`New Value`;

//Move the image
var img=document.getElementById('madi');
 img.onclick=function(){
     img.style.marginRight=`50px`;
 };