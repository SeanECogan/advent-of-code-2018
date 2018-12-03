'use strict';

import fs from 'fs';

const solver = {
    solve: function() {
        const fileContents = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

        const boxIds = fileContents
            .split(/\r?\n/);

        const commonLetters = this.findCommonLettersInBoxIDs(boxIds);

        console.log(`Common letters are: ${commonLetters}.`);
    },

    findCommonLettersInBoxIDs: function (boxIds) {        
        function getCommonLetters(firstId, secondId) {
            let commonLetters = '';

            for (let i = 0; i < firstId.length; i++) {
                if (firstId[i] === secondId[i]) {
                    commonLetters += firstId[i];
                }
            }

            return commonLetters;
        }
        
        boxIds.sort();

        for (let i = 0; i < boxIds.length -1; i++) {
            const commonLetters = getCommonLetters(boxIds[i], boxIds[i +1]);

            if (commonLetters.length === boxIds[i].length - 1) {
                return commonLetters;
            }
        }

        return 'Could not find a match.';
    }
}

export default solver;