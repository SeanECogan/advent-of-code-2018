'use strict';

import fs from 'fs';

const solver = {
    solve: function() {
        const fileContents = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

        const frequencyChanges = fileContents
            .split(/\r?\n/)
            .map(line => +line);

        this.calculateFrequency(frequencyChanges);
    },

    calculateFrequency: function (frequencyChanges) {
        const totalChanges = frequencyChanges.length;

        let currentIndex = 0;
        let foundDuplicateFrequency = false;
        let previousFrequencies = [0];

        while (!foundDuplicateFrequency) {         
            const newFrequency = 
                previousFrequencies[currentIndex] + frequencyChanges[currentIndex % totalChanges];

            if (previousFrequencies.some((value) => value === newFrequency)) {
                console.log(`First duplicate frequency is ${newFrequency}.`);
                foundDuplicateFrequency = true;
            } else {
                previousFrequencies.push(newFrequency);
                currentIndex++;
            }
        }
    }
}

export default solver;