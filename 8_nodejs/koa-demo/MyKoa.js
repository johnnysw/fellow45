const http = require('http');

module.exports = class MyKoa{

    myCtx = {};

    constructor(){}

    callback(obj){
        return function(req, res){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(obj.body);
            res.end("");
        };
    }

    use(fn){  
        fn(this.myCtx);
    }

    listen(port){
        let server = http.createServer(  this.callback(this.myCtx)   );
        server.listen(port);
        console.log('MyKoa is starting at port ' + port);
    }
}