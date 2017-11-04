module.exports = function updateElapsedTime(session, event) {
    var date = new Date();

    switch (event) {
        case 'Kick Off 1st Half': {
            session.userData.playerInOut = 'In Assumed';
            session.userData.mostRecentPlayerStartTime = date.getTime();
            session.userData.mostRecentGameStartTime = date.getTime();
            };
            break;
        case 'Kick Off 2nd Half': {
            //assume playerInOut doesn't change at half time
            session.userData.mostRecentPlayerStartTime = date.getTime();
            session.userData.mostRecentGameStartTime = date.getTime();
            };
            break;
        case 'Kick Off 1st Half Extra Time': {
            //assume playerInOut doesn't change at half time
            session.userData.mostRecentPlayerStartTime = date.getTime();
            session.userData.mostRecentGameStartTime = date.getTime();
            };
            break;
        case 'Kick Off 2nd Half Extra Time': {
            //assume playerInOut doesn't change at half time
            session.userData.mostRecentPlayerStartTime = date.getTime();
            session.userData.mostRecentGameStartTime = date.getTime();
            };
            break;
        case 'Final Whistle': {
            //assume playerInOut doesn't change at half time or full time
            var currentGameElapsedTime = date.getTime() - session.userData.mostRecentGameStartTime;
            session.userData.totalGameElapsedTime = session.userData.totalGameElapsedTime + currentGameElapsedTime;
            if (session.userData.playerInOut == 'In' || session.userData.playerInOut == 'In Assumed') {
                var currentPlayerElapsedTime = date.getTime() - session.userData.mostRecentPlayerStartTime;
                session.userData.totalPlayerElapsedTime = session.userData.totalPlayerElapsedTime + currentPlayerElapsedTime;
                console.log('----> totalPlayerElapsedTime Updated' + session.userData.totalPlayerElapsedTime );
                }
            };
            break;
        case 'Substituted In': {
            session.userData.playerInOut = 'In';
            session.userData.mostRecentPlayerStartTime = date.getTime();
            };
            break;
        case 'Substituted Out': {
            session.userData.playerInOut = 'Out';
            var currentPlayerElapsedTime = date.getTime() - session.userData.mostRecentPlayerStartTime;
            session.userData.totalPlayerElapsedTime = session.userData.totalPlayerElapsedTime + currentPlayerElapsedTime;
            console.log('----> totalPlayerElapsedTime Updated' + session.userData.totalPlayerElapsedTime );
            };
            break;
        default: {console.log('Default Case')}

    }
    console.log('updateElapsedTime called ' + event + date.toISOString());
    console.log("PlayerINOUT:" + session.userData.playerInOut);
    console.log("matchState:" + session.userData.matchState);
    console.log("mostRecentPlayerStartTime:" + session.userData.mostRecentPlayerStartTime);
    console.log("mostRecentGameStartTime:" + session.userData.mostRecentGameStartTime);
    console.log("totalPlayerElapsedTime:" + session.userData.totalPlayerElapsedTime);
    console.log("totalGameElapsedTime:" + session.userData.totalGameElapsedTime);

}