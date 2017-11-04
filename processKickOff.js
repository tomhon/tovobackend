var logResponse = require('./logResponse');
var updateElapsedTime = require ('./updateElapsedTime');

module.exports = function processKickOff(session) {

if (session.userData.matchState == 'Pre-Game') 
{
    updateElapsedTime(session,'Kick Off 1st Half');
    logResponse (session, session.userData.playerNumber, 'Kick Off 1st Half');
    session.userData.matchState = '1st Half';
    console.log('Match State Changed >>>>' + session.userData.matchState);
}
if (session.userData.matchState == 'Half Time') 
{
    updateElapsedTime(session,'Kick Off 2nd Half');
    logResponse (session, session.userData.playerNumber, 'Kick Off 2nd Half');
    session.userData.matchState = '2nd Half';
    console.log('Match State Changed >>>>' + session.userData.matchState);
}
if (session.userData.matchState == 'Full Time') 
{
    updateElapsedTime(session,'Kick Off 1st Half Extra Time');
    logResponse (session, session.userData.playerNumber, 'Kick Off 1st Half Extra Time');
    session.userData.matchState = '1st Half Extra Time';
    console.log('Match State Changed >>>>' + session.userData.matchState);
}
if (session.userData.matchState == 'Half Time Extra Time') 
{
    updateElapsedTime(session,'Kick Off 2nd Half Extra Time');
    logResponse (session, session.userData.playerNumber, 'Kick Off 2nd Half Extra Time');
    session.userData.matchState = '2nd Half Extra Time';
    console.log('Match State Changed >>>>' + session.userData.matchState);
}

}