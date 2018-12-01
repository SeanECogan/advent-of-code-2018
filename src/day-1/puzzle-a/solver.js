'use strict';

import fs from 'fs';

let solver = {
    calculateFrequency: function () {
        let fileContents = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

        let frequencyChanges = fileContents
            .split(/\r?\n/)
            .map(line => +line);

        const resultingFrequency = frequencyChanges.reduce((prev, curr) => prev + curr, 0);

        console.log(`Resulting frequency is: ${resultingFrequency}.`);
    }
}

export default solver;