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



//Submit name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the respnse and store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //Take Some Action
            if(request.status === 200){
                //Capture a list of names and render it as a list
                var name=request.responseText;
                names=JSON.parse(names);
                var list='';
    
    for(var i=0;i<names.length;i++){
        list+='<li>'+ names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
        }
    }
    };

//Make the Request
  request.open('GET', 'http://shreyassarkar98.imad.hasura-app.io/submit-name?name=' +name , true);
  request.send(null);
};
