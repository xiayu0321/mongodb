var http = require("http");  //注意require 引入的是module里面的模块可以不用加../ ./ ../../这种相对符，其他如果是同级也得加./才能引入成功
var open = require("child_process");
var querystring = require("querystring");

var server = http.createServer(function(req,res){
    var post = '';

    req.on('data',function(chunk){
        post += chunk;
    });

    req.on('end',function(){
        post = querystring.parse(post);
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        res.write(post.title);
        res.write(post.text);
        res.end();
    });
}).listen(3000,'127.0.0.1');

open.exec("start http://127.0.0.1:3000");