var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var `Page1`:{
  title: 'Page1|Shreyas',
  heading:'Page1',
  date: 'August 9, 2017',
  content:`<p> This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app.
            </p>
             <p> This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app.
             </p>
              <p> This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app. This is my first Web app.
              </p>`
};
var `Page2`:{
  title: 'Page2|Shreyas',
  heading:'Page2',
  date: 'August 19, 2017',
  content:`<p> This is my Second Page.
              </p>`
};
var `Page3`:{
  title: 'Page3|Shreyas',
  heading:'Page3',
  date: 'August 29, 2017',
  content:`<p> This is my Third Page.
              </p>`
};
function createTemplate(data){
    
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate= `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name='viewport' content="width-device-width,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/"> Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:PageName',function(req,res){
    //PageName=Page1
    //Pages[PageName]={} content object for Page1
    var PageName=req.params.PageName;
    res.send(createTemplate(Pages[PageName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
