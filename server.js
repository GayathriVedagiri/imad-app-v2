var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles=
{
 'article-one':{title:"article one gayu",
                heading:"Article One",
                date:"mar 17 2017",
                 content:`<p>
                </p>
                 <p>
                    THis is the content of my first article..THis is the content of my first article..THis is the content of my first article..THis is the content of my first article..THis is the content of my first article..THis is the content of my first article..
                </p>
                 <p>
                    THis is the content of my first article..THis is the content of my first article..THis is the content of my first article..THis is the content of my first article..THis is the content of my first article..THis is the content of my first article..
                </p>`
            },
 'article-two':{title:"article two gayu",
             heading:"Article two",
             date:"mar 17 2017",
             content:`<p>
                </p>
                 <p>
                    THis is the content of my second article..THis is the content of my second article..THis is the content of my second article..THis is the content of my second article..THis is the content of my second article..THis is the content of my second article..
                </p>
                 <p>
                      THis is the content of my second article..THis is the content of my second article..THis is the content of my second article..THis is the content of my second article..THis is the content of my second article..THis is the content of my second article...
                </p>`}, 
 'article-three':{title:"article three gayu",
             heading:"Article three",
             date:"mar 17 2017",
             content:`<p>
                </p>
                 <p>
                    THis is the content of my third article..THis is the content of my third article..THis is the content of my third article..THis is the content of my third article..THis is the content of my third article..THis is the content of my third article..
                </p>
                 <p>
                    THis is the content of my third article..THis is the content of my third article..THis is the content of my third article..THis is the content of my third article..THis is the content of my third article..THis is the content of my third article..
                </p>`}
};
function createtemplate(data)
{ var title=data.title;
  var date=data.date;
  var heading=data.heading;
  var content=data.content;

var htmltemplate=
`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/ui/style.css" rel='stylesheet'/>
        
    </head>
        <body>
            <div class="container" >
            <div>
               <a href='/'>home</a>
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
    
</html>`;
return htmltemplate;

}    
var counter=0;
app.get('/counter',function(req,res){
    counter=couunter+1;
 res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function(req,res){
     var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename])); 
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
