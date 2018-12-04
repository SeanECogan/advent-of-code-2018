'use strict';

import fs from 'fs';

const solver = {
    solve: function() {
        const fileContents = fs.readFileSync(`${__dirname}/../input.txt`, 'utf8');

        const frequencyChanges = fileContents
            .split(/\r?\n/)
            .map(line => +line);

        const duplicateFrequency = this.findDuplicateFrequency(frequencyChanges);

        console.log(`First duplicate frequency is ${duplicateFrequency}.`);
    },

    findDuplicateFrequency: function (frequencyChanges) {
        const totalChanges = frequencyChanges.length;

        let currentIndex = 0;
        let foundDuplicateFrequency = false;
        let previousFrequency = 0;
        let previousFrequencies = { 0: true };
        let duplicateFrequency = 0;

        while (!foundDuplicateFrequency) {         
            const newFrequency = 
                previousFrequency + frequencyChanges[currentIndex % totalChanges];

            if (previousFrequencies[newFrequency]) {
                duplicateFrequency = newFrequency;
                foundDuplicateFrequency = true;
            } else {
                previousFrequencies[newFrequency] = true;
                previousFrequency = newFrequency;
                currentIndex++;
            }
        }

        return duplicateFrequency;
    }
}

export default solver;