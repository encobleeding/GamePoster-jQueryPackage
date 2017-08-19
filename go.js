const http = require("http")
const fs = require("fs")
const url = require('url');
const path = require('path');
const querystring = require("querystring");
//var mime = require('mime');

http.createServer(function(req,res){
  console.log(req.url);
  if(req.url == "/"){
    fs.readFile("./index.html",function (error,data){
      res.end(data.toString());
    })
  }

  if(req.url == "/css/normalize.css"){
    fs.readFile("./css/normalize.css",function (error,data){
      res.end(data.toString());
    })
  }

  if(req.url == "/js/jquery-2.1.1.min.js"){
    fs.readFile("./js/jquery-2.1.1.min.js",function (error,data){
      res.end(data.toString());
    })
  }

  if(req.url == "/js/jquery.easing.min.js"){
    fs.readFile("./js/jquery.easing.min.js",function (error,data){
      res.end(data.toString());
    })
  }

  if(req.url == "/dist/jquery.nGyroParallax.js"){
    fs.readFile("./dist/jquery.nGyroParallax.js",function (error,data){
      res.end(data.toString());
    })
  }

  if(req.url == "/dist/jquery.nGyroParallax.min.js"){
    fs.readFile("./dist/jquery.nGyroParallax.min.js",function (error,data){
      res.end(data.toString());
    })
  }

  if(req.url == "/dist/jquery.nGyroParallax.min.sourcemap.js"){
    fs.readFile("./dist/jquery.nGyroParallax.min.sourcemap.js",function (error,data){
      res.end(data.toString());
    })
  }

  if(req.url == "/img/03.png"){
    fs.readFile("./img/03.png",function(error,data){
      res.writeHead(200,{"Content-Type":"image/png"});
      res.write(data);
      res.end();
    })
  }

  if(req.url == "/img/01.png"){
    fs.readFile("./img/01.png",function(error,data){
      res.writeHead(200,{"Content-Type":"image/png"});
      res.write(data);
      res.end();
    })
  }

  if(req.url == "/img/02.png"){
    fs.readFile("./img/02.png",function(error,data){
      res.writeHead(200,{"Content-Type":"image/png"});
      res.write(data);
      res.end();
    })
  }

  if(req.url == "/img/04.png"){
    fs.readFile("./img/04.png",function(error,data){
      res.writeHead(200,{"Content-Type":"image/png"});
      res.write(data);
      res.end();
    })
  }

  if(req.url == "/img/fes_ink1-1.png"){
    fs.readFile("./img/fes_ink1-1.png",function(error,data){
      res.writeHead(200,{"Content-Type":"image/png"});
      res.write(data);
      res.end();
    })
  }

  if(req.url == "/img/fes_ink1-2.png"){
    fs.readFile("./img/fes_ink1-2.png",function(error,data){
      res.writeHead(200,{"Content-Type":"image/png"});
      res.write(data);
      res.end();
    })
  }

  if(req.url == "/img/fes_chouchin.png"){
    fs.readFile("./img/fes_chouchin.png",function(error,data){
      res.writeHead(200,{"Content-Type":"image/png"});
      res.write(data);
      res.end();
    })
  }

  if(req.url == "/img/fes_main_bg.png"){
    fs.readFile("./img/fes_main_bg.png",function(error,data){
      res.writeHead(200,{"Content-Type":"image/png"});
      res.write(data);
      res.end();
    })
  }
}).listen(5000);
