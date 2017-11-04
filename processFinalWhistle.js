var logResponse = require('./logResponse');
var updateElapsedTime = require ('./updateElapsedTime');

module.exports = function processFinalWhistle(session) {

    if (session.userData.matchState == '1st Half') 
    {
        updateElapsedTime(session,'Final Whistle');
        logResponse (session, session.userData.playerNumber, 'Final Whistle 1st Half');
        session.userData.matchState = 'Half Time';
        console.log('Match State Changed >>>>' + session.userData.matchState);
    }
   if (session.userData.matchState == '2nd Half') 
    {
        updateElapsedTime(session,'Final Whistle');
        logResponse (session, session.userData.playerNumber, 'Final Whistle 2nd Half');
        session.userData.matchState = 'Full Time';
        console.log('Match State Changed >>>>' + session.userData.matchState);
    }
   if (session.userData.matchState == '1st Half Extra Time') 
    {
        updateElapsedTime(session,'Final Whistle');
        logResponse (session, session.userData.playerNumber, 'Final Whistle 1st Half Extra Time');
        session.userData.matchState = 'Half Time Extra Time';
        console.log('Match State Changed >>>>' + session.userData.matchState);
    }
   if (session.userData.matchState == '2nd Half Extra Time') 
    {
        updateElapsedTime(session,'Final Whistle');
        logResponse (session, session.userData.playerNumber, 'Final Whistle 2nd Half Extra Time');
        session.userData.matchState = 'Full Time Extra Time';
        console.log('Match State Changed >>>>' + session.userData.matchState);
    }
}

