const http = require('http');//request for http module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');//html mate /html
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="portfolio.css">
  </head>
  <body>
      <div class="container">
      <div class="sidebar">
      <nav>
          <ul>
              <li><a href="/">home</a></li>
              <li><a href="intro.html">intro</a></li>
              <li><a href="services.html">services</a></li>
              <li><a href="blog.html">blog</a></li>
              <li><a href="contact.html">contact</a></li>
          </ul>
      </nav>        
      </div>
      <div class="main">
          <div class="infocontainer">
              <div class="devinfo">
                  <div class="hello">
                      hello i am
                  </div>
                  <div class="name">rahul gandhi</div>
                  <div class="about">developer,enterprenuer,dancer</div>
                  <div class="moreabout">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                  </div>
                  <div class="buttons">
                      <button>download cv</button>
                      <button>contact me</button>
                  </div>
              </div>
              <div class="devpic">
                  <img src="rahul.jpg" alt="" srcset="">
              </div>
          </div>
      </div>
  </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
///rep read input print
//_ means last variable print