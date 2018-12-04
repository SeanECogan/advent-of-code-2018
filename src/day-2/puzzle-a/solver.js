'use strict';

import fs from 'fs';

const solver = {
    solve: function() {
        const fileContents = fs.readFileSync(`${__dirname}/../input.txt`, 'utf8');

        const boxIds = fileContents
            .split(/\r?\n/);

        const checksum = this.calculateChecksum(boxIds);

        console.log(`Checksum is: ${checksum}.`);
    },

    calculateChecksum: function (boxIds) {        
        function getLetterCounts(boxId) {
            let letterCounts = {};

            for (let character of boxId) {
                if (!letterCounts[character]) {
                    letterCounts[character] = 1;
                } else {
                    letterCounts[character]++;
                }
            }

            return Object.values(letterCounts);
        }
        
        let idsWithTwoOfAnyLetter = 0;
        let idsWithThreeOfAnyLetter = 0;

        for (let boxId of boxIds) {
            const letterCounts = getLetterCounts(boxId);

            if (letterCounts.some(count => count === 2)) {
                idsWithTwoOfAnyLetter++;
            }

            if (letterCounts.some(count => count === 3)) {
                idsWithThreeOfAnyLetter++;
            }
        }

        return idsWithTwoOfAnyLetter * idsWithThreeOfAnyLetter;
    }
}

export default solver;