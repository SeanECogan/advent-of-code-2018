'use strict';

import fs from 'fs';

const solver = {
    solve: function () {
        const fileContents = fs.readFileSync(`${__dirname}/../input.txt`, 'utf8');

        const coordinates = fileContents
            .split(/\r?\n/);

        const maxDistance = 10000;

        const sizeOfSafeRegion = this.findSizeOfSafeRegion(
            coordinates,
            maxDistance);

        console.log(`The size of the safe region is: ${sizeOfSafeRegion}.`);
    },

    findSizeOfSafeRegion: function (
        coordinates,
        maxDistance) {
        let numericCoordinates = [];

        // Parse input.
        for (let i = 0; i < coordinates.length; i++) {
            const coordinateParts = coordinates[i].replace(/\s/g, '').split(',');

            numericCoordinates.push({
                id: i,
                x: +coordinateParts[0],
                y: +coordinateParts[1]
            });
        }

        // Find boundaries.
        const xMin = Math.min(...(numericCoordinates.map(nc => nc.x)));
        const xMax = Math.max(...(numericCoordinates.map(nc => nc.x)));
        const yMin = Math.min(...(numericCoordinates.map(nc => nc.y)));
        const yMax = Math.max(...(numericCoordinates.map(nc => nc.y)));

        // Find number of coordinates that are 'safe'.
        let safeRegionSize = 0;

        for (let x = xMin; x <= xMax; x++) {
            for (let y = yMin; y <= yMax; y++) {
                let totalDistance = 0;

                for (let numericCoordinate of numericCoordinates) {
                    const distance = Math.abs(numericCoordinate.x - x) + Math.abs(numericCoordinate.y - y);

                    totalDistance += distance;
                }

                if (totalDistance < maxDistance) {
                    safeRegionSize++;
                }
            }
        }

        return safeRegionSize;
    }
}

export default solver;