var restify = require('restify');
var userData = require('./dataStructure');
var userDataPlayer = require('./dataStructure');
var processPlayerTrackingUpdate = require('./processPlayerTrackingUpdate');
var logResponse = require('./logResponse');


var server = restify.createServer();
server.use(restify.plugins.queryParser());

server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

function session() {
    this.userData = new userData();
};
session = new session();
session.userData.user = "Admin"
console.log('New session object created');
initialLogEntry = session.userData;

server.get('/', function (req, res){
    console.log("Inbound Request:" , req.query);
    res.header('Access-Control-Allow-Origin', "*");
    var statusUpdateResponse = processPlayerTrackingUpdate(session, req.query);
    logResponse (session, session.userData.playerNumber, req.query.status);
    console.log('Outbound Response:', req.query.status + ":" + statusUpdateResponse);
    res.send(req.query.status + ":" + statusUpdateResponse);
    // res.send(session.userData);

});
