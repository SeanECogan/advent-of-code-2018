'use strict';

import fs from 'fs';

const solver = {
    solve: function() {
        const fileContents = fs.readFileSync(`${__dirname}/../input.txt`, 'utf8');

        const claims = fileContents
            .split(/\r?\n/);

        const overlapArea = this.calculateOverlapArea(claims);

        console.log(`Area of fabric that overlaps is: ${overlapArea}.`);
    },

    calculateOverlapArea: function (claims) {     
        let fabric = {};
        
        for (let claim of claims) {
            const claimParts = claim.split(' ');

            const claimId = +claimParts[0].replace('#', '');

            const claimCoords = claimParts[2].split(',');
            const claimXPos = +claimCoords[0];
            const claimYPos = +claimCoords[1].replace(':', '');

            const claimArea = claimParts[3].split('x');
            const claimWidth = +claimArea[0];
            const claimHeight = +claimArea[1];

            for (let x = claimXPos; x < (claimXPos + claimWidth); x++) {
                for (let y = claimYPos; y < (claimYPos + claimHeight); y++) {
                    if (fabric[x]) {
                        if (fabric[x][y]) {
                            fabric[x][y]++;
                        } else {
                            fabric[x][y] = 1;
                        }
                    } else {
                        fabric[x] = {};
                        fabric[x][y] = 1;
                    }
                }
            }
        }

        return Object.values(fabric).map(column => {
            return Object.values(column).filter(cell => cell >= 2).length;
        }).reduce((prev, curr) => prev + curr, 0);
    }
}

export default solver;