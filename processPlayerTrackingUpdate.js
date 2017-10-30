module.exports = function processPlayerTrackingUpdate(session, status) {
    switch(status) {
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
        case 'penaltyScored': {session.userData.penaltyScoredCount ++; session.userData.penaltyKickCount ++; session.userData.goalCount ++; session.userData.shotOnFrame ++;
            return(session.userData.penaltyScored.toString());
            break;
            }
        case 'penaltyMissed': {session.userData.penaltyKickCount ++;
            return(session.userData.penaltyKickCount.toString());
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
            return(session.userData.substitutedInCount.toString());
            break;
            }
        case 'substitutedOut': {session.userData.substitutedOutCount ++;
            return(session.userData.substitutedOutCount.toString());
            break;
            }        
        case 'kickOff': {session.userData.kickOffCount ++;
            return(session.userData.kickOffCount.toString());
            break;
            }
        case 'finalWhistle': {session.userData.finalWhistleCount ++;
            return(session.userData.finalWhistleCount.toString());
            break;
            }
    }
};