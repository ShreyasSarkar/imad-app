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
  request.open('GET', 'http://shreyassarkar98.imad.hasura-app.io/counter', true);
  request.send(null);
  
};


  //Make a request to the counter endpoint
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //Take Some Action
          if(request.status ===200){
               //Capture a list of names and render it as a list
               var names=request.responseText;
               names=JSON.parse(names);
    var list='';
    
    for(var i=0;i<names.length;i++){
        list+='<li>'+ names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
          }
      }
      //Not done yet
  };
  //Make the Request
  request.open('GET', 'http://shreyassarkar98.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
  
};


//Submit name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a request to the server and send the name
    
    //Capture a list of names and render it as a list
    
    var names=['name1','name2','name3','name4'];
    var list='';
    
    for(var i=0;i<names.length;i++){
        list+='<li>'+ names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
};
