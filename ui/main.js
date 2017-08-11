//Counter Code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
  //Make a request to the counter endpoint
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange =function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //Take Some Action
          if(request.status ===200){
              var counter=request.responseText;
              var span= document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }
      //Not done yet
  };
  
  //Make the Request
  response.open('GET', 'http://http://shreyassarkar98.imad.hasura-app.io/', true);
  request.send(null);
  //Render the variable in the correct span
  
  counter=counter+1;
  var span=document.getElementById('count');
 span.innerHTML=counter.toString();
};


console.log('Loaded!');
//Change The Text Of The main-text div
//var element=document.getElementById('main-text');

//element.innerHTML=`New Value`;

//Move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
 img.onclick=function(){
     var interval= setInterval(moveRight,50);
 };