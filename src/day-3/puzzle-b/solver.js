'use strict';

import fs from 'fs';

const solver = {
    solve: function() {
        const fileContents = fs.readFileSync(`${__dirname}/../input.txt`, 'utf8');

        const claims = fileContents
            .split(/\r?\n/);

        const uniqueClaim = this.findUniqueClaim(claims);

        console.log(`The single unique claim is: ${uniqueClaim}.`);
    },

    findUniqueClaim: function (claims) {     
        let fabric = {};
        let claimIds = [];
        
        for (let claim of claims) {
            const claimParts = claim.split(' ');

            const claimId = +claimParts[0].replace('#', '');
            claimIds.push(claimId);

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
                            fabric[x][y].push(claimId);
                        } else {
                            fabric[x][y] = [claimId];
                        }
                    } else {
                        fabric[x] = {};
                        fabric[x][y] = [claimId];
                    }
                }
            }
        }


        let allCells = Object.values(fabric).map(column => {
            return Object.values(column);
        }).reduce((prev, curr) => prev.concat(curr), []);

        let uniqueClaimId;
        
        for (let claimId of claimIds) {
            if (!allCells
                    .filter(cell => cell.indexOf(claimId) >= 0)
                    .some(cell => cell.length > 1)) {
                uniqueClaimId = claimId;
                break;
            }
        }

        return uniqueClaimId;
    }
}

export default solver;