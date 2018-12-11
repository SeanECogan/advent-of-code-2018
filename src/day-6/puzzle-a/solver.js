'use strict';

import fs from 'fs';

const solver = {
    solve: function () {
        const fileContents = fs.readFileSync(`${__dirname}/../input.txt`, 'utf8');

        const coordinates = fileContents
            .split(/\r?\n/);

        const sizeOfLargestNonInfiniteArea = this.findLargestNonInfiniteArea(coordinates);

        console.log(`The size of the largest non-infinite area is: ${sizeOfLargestNonInfiniteArea}.`);
    },

    findLargestNonInfiniteArea: function (coordinates) {
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

        // Find closest coordinate for each point within (including) boundaries.
        let closestCoordinates = {};

        for (let x = xMin; x <= xMax; x++) {
            for (let y = yMin; y <= yMax; y++) {
                let coordinateDistances = [];

                for (let numericCoordinate of numericCoordinates) {
                    const distance = Math.abs(numericCoordinate.x - x) + Math.abs(numericCoordinate.y - y);
                    coordinateDistances.push({
                        id: numericCoordinate.id,
                        distance: distance
                    });
                }

                const closestDistance = Math.min(...coordinateDistances.map(cd => cd.distance));
                const coordinatesAtClosestDistance = coordinateDistances.filter(cd => cd.distance === closestDistance);

                if (coordinatesAtClosestDistance.length === 1) {
                    const currentId = coordinatesAtClosestDistance[0].id;

                    if (!closestCoordinates[currentId]) {
                        closestCoordinates[currentId] = [];
                    }

                    closestCoordinates[currentId].push({
                        x: x,
                        y: y
                    });
                }
            }
        }

        // Exclude coordinates with at least one point on a boundary.
        let nonInfiniteCoordinates = {};

        for (let coordinateKey of Object.keys(closestCoordinates)) {
            if (!closestCoordinates[coordinateKey].some(c => c.x === xMin || c.x === xMax || c.y === yMin || c.y === yMax)) {
                nonInfiniteCoordinates[coordinateKey] = closestCoordinates[coordinateKey];
            }
        }

        // Find coordinate with most points closest to it.
        return Math.max(...Object.values(nonInfiniteCoordinates).map(c => c.length));
    }
}

export default solver;