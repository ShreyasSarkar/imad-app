//Counter Code
var button=document.getElementById('counter');

button.onclick=function(){
  //Make a request to the counter endpoint
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
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
  response.open('GET', 'http://shreyassarkar98.imad.hasura-app.io/counter', true);
  request.send(null);
  
};


