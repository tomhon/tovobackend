var processKickOff = require('./processKickOff');
var processFinalWhistle = require('./processFinalWhistle');
var updateElapsedTime = require ('./updateElapsedTime');
var createNewGame = require('./processNewGameNewPlayer');
var createNewPlayer = require('./processNewGameNewPlayer');

module.exports = function processPlayerTrackingUpdate(session, query) {
    switch(query.status) {
        case 'successfulPass': {session.userData.completedPassCount ++; session.userData.attemptedPassCount ++;
            return(session.userData.completedPassCount.toString());
            break;
            }
        case 'attemptedPass': {session.userData.attemptedPassCount ++;
            return(session.userData.attemptedPassCount.toString());
            break;
            }
        case 'successfulTackle': {session.userData.successfulTackleCount ++; session.userData.attemptedTackleCount ++;
            return(session.userData.successfulTackleCount.toString());
            break;
            }
        case 'attemptedTackle': {session.userData.attemptedTackleCount ++;
            return(session.userData.attemptedTackleCount.toString());
            break;
            }
        case 'successfulDribble': {session.userData.successfulDribbleCount ++; session.userData.attemptedDribbleCount ++;
            return(session.userData.successfulDribbleCount.toString());
            break;
            }
        case 'attemptedDribble': {session.userData.attemptedDribbleCount ++;
            return(session.userData.attemptedDribbleCount.toString());
            break;
            }        
        case 'shotOnFrame': {session.userData.shotOnFrameCount ++;
            return(session.userData.shotOnFrameCount.toString());
            break;
            }
        case 'shotOffFrame': {session.userData.shotOffFrameCount ++;
            return(session.userData.shotOffFrameCount.toString());
            break;
            }
        case 'goal': {session.userData.goalCount ++; session.userData.shotOnFrameCount ++;
            return(session.userData.goalCount.toString());
            break;
            }
        case 'assist': {session.userData.assistCount ++;
            return(session.userData.assistCount.toString());
            break;
            }
        case 'freeKick': {session.userData.freeKickCount ++;
            return(session.userData.freeKickCount.toString());
            break;
            }
        case 'corner': {session.userData.cornerCount ++;
            return(session.userData.cornerCount.toString());
            break;
            }
        case 'penaltyScored': {session.userData.penaltyScoredCount ++; session.userData.penaltyKickCount ++; session.userData.goalCount ++; session.userData.shotOnFrameCount ++;
            return(session.userData.penaltyScoredCount.toString());
            break;
            }
        case 'penaltyMissed': {session.userData.penaltyKickCount ++; session.userData.penaltyMissedCount ++;
            return(session.userData.penaltyMissedCount.toString());
            break;
            }        
        case 'fouled': {session.userData.fouledCount ++;
            return(session.userData.fouledCount.toString());
            break;
            }
        case 'committedFoul': {session.userData.committedFoulCount ++;
            return(session.userData.committedFoulCount.toString());
            break;
            }
        case 'substitutedIn': {session.userData.substitutedInCount ++;
            updateElapsedTime(session, 'Substituted In');
            return(session.userData.substitutedInCount.toString());
            break;
            }
        case 'substitutedOut': {session.userData.susbstitutedOutCount ++;
            updateElapsedTime(session, 'Substituted Out');
            return(session.userData.susbstitutedOutCount.toString());
            break;
            }        
        case 'kickOff': {session.userData.kickOffCount ++;
            processKickOff(session);
            return(session.userData.kickOffCount.toString());
            break;
            }
        case 'finalWhistle': {session.userData.finalWhistleCount ++;
            processFinalWhistle(session);
            return(session.userData.finalWhistleCount.toString());
            break;
            }
        case 'newGame': {
            createNewGame(session);
            return("New Game Initialized");
            break;
            }
        case 'newPlayer': {
            createNewPlayer(session);
            return("New Player and Game Initialized");
            break;
            }
        case 'newPlayerName': {
            session.userData.playerName = query.data;
            console.log('Player Name Updated to:' + session.userData.playerName);
            return("Player Name Updated");
            break;
            }
        case 'newPlayerNumber': {
            session.userData.playerNumber = query.data;
            console.log('Player Number Updated to:' + session.userData.playerNumber);
            return("Player Number Updated");
            break;
            }
        case 'newPlayerTeam': {
            session.userData.playerTeam = query.data;
            console.log('Player Team Updated to:' + session.userData.playerTeam);
            return("Player Team Updated");
            break;
            }
        case 'newPlayerClub': {
            session.userData.playerClub = query.data;
            console.log('Player Club Updated to:' + session.userData.playerClub);
            return("Player Club Updated");
            break;
            }
        case 'newOpponentTeam': {
            session.userData.opponentTeam = query.data;
            console.log('Opponent Team Updated to:' + session.userData.opponentTeam);
            return("Opponent Team Updated");
            break;
            }
        case 'newOpponentClub': {
            session.userData.opponentClub = query.data;
            console.log('Opponent Club Updated to:' + session.userData.opponentClub);
            return("Opponent Club Updated");
            break;
            }
        case 'newGameLocation': {
            session.userData.gameLocation = query.data;
            console.log('Game location Updated to:' + session.userData.gameLocation);
            return("Game location Updated");
            break;
            }
        case 'newGameField': {
            session.userData.gameField = query.data;
            console.log('Game Field Updated to:' + session.userData.gameField);
            return("Game Field Updated");
            break;
            }
} 
};