'use strict';

import fs from 'fs';

const solver = {
    solve: function() {
        const fileContents = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

        const frequencyChanges = fileContents
            .split(/\r?\n/)
            .map(line => +line);

        const resultingFrequency = this.calculateFinalFrequency(frequencyChanges);

        console.log(`Resulting frequency is: ${resultingFrequency}.`);
    },

    calculateFinalFrequency: function (frequencyChanges) {        
        return frequencyChanges.reduce((prev, curr) => prev + curr, 0);
    }
}

export default solver;