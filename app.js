var restify = require('restify');
var userData = require('./dataStructure');
var processPlayerTrackingUpdate = require('./processPlayerTrackingUpdate');

var server = restify.createServer();
server.use(restify.plugins.queryParser());

server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

function session() {
    this.userData = new userData();
};

session = new session();
console.log('New session object created');


server.get('/', function (req, res){
    console.log("Inbound Request:" , req.query);
    res.header('Access-Control-Allow-Origin', "*");
    var statusUpdateResponse = processPlayerTrackingUpdate(session, req.query.status)
    console.log('Outbound Response:', req.query.status + ":" + statusUpdateResponse);
    res.send(req.query.status + ":" + statusUpdateResponse);

});
