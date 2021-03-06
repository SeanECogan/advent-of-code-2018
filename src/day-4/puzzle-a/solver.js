'use strict';

import fs from 'fs';

const solver = {
    solve: function() {
        const fileContents = fs.readFileSync(`${__dirname}/../input.txt`, 'utf8');

        const logs = fileContents
            .split(/\r?\n/);

        const mostAsleepMinuteOfMostAsleepGuard = this.findMostAsleepMinuteOfMostAsleepGuard(logs);

        console.log(`The ID of the most asleep guard multiplied by the minute they were most asleep is: ${mostAsleepMinuteOfMostAsleepGuard}.`);
    },

    findMostAsleepMinuteOfMostAsleepGuard: function (logs) {     
        let messageLogs = logs.map(log => {
            const logParts = log.split(']');
            const logTimeString = logParts[0].replace('[', '').replace(' ', 'T') + ':00';
            const logTime = new Date(logTimeString);
            
            const logMessage = logParts[1].substring(1);

            return {
                timestamp: logTime,
                message: logMessage
            };
        }).sort((a, b) => a.timestamp - b.timestamp);

        let sleepTracker = {};

        let currentGuardId;
        let currentGuardSleepStartMinute;
        let currentGuardSleepEndMinute;

        for (let messageLog of messageLogs) {
            if (messageLog.message.indexOf('Guard') >= 0) {
                const messageParts = messageLog.message.split(' ');
                currentGuardId = +(messageParts[1].replace('#', ''));
            } else if (messageLog.message.indexOf('falls') >= 0) {
                currentGuardSleepStartMinute = messageLog.timestamp.getMinutes();
            } else {
                currentGuardSleepEndMinute = messageLog.timestamp.getMinutes();

                if (!sleepTracker[currentGuardId]) {
                    sleepTracker[currentGuardId] = {};
                }

                for (let i = currentGuardSleepStartMinute; i < currentGuardSleepEndMinute; i++) {
                    if (sleepTracker[currentGuardId][i]) {
                        sleepTracker[currentGuardId][i]++;
                    } else {
                        sleepTracker[currentGuardId][i] = 1;
                    }
                }
            }
        }

        const mostAsleepGuard = Object.keys(sleepTracker).map(guardSleepKey => {
            const guardSleep = sleepTracker[guardSleepKey];
            const totalSleep = Object.values(guardSleep).reduce((prev, curr) => prev + curr, 0);

            return {
                guardId: guardSleepKey,
                totalSleep: totalSleep
            };
        }).sort((a, b) => b.totalSleep - a.totalSleep)[0].guardId;

        let mostAsleepMinute;
        let currentMostAsleepMinute = 0;

        Object.keys(sleepTracker[mostAsleepGuard]).map(minute => {
            if (sleepTracker[mostAsleepGuard][minute] > currentMostAsleepMinute) {
                currentMostAsleepMinute = sleepTracker[mostAsleepGuard][minute];
                mostAsleepMinute = minute;
            }
        });

        return mostAsleepGuard * mostAsleepMinute;
    }
}

export default solver;