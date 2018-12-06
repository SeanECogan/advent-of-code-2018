'use strict';

import fs from 'fs';

const solver = {
    solve: function () {
        const fileContents = fs.readFileSync(`${__dirname}/../input.txt`, 'utf8');

        const polymer = fileContents;

        const shortestPolymerLength = this.findLengthOfShortestPolymer(polymer);

        console.log(`The number of units in the shortest polymer is: ${shortestPolymerLength}.`);
    },

    findLengthOfShortestPolymer: function (polymer) {
        function reducePolymer(originalPolymer) {
            let reducedPolymer = '';

            for (let i = 0; i < (originalPolymer.length); i++) {
                let currentCharacter = originalPolymer.charAt(i);
                let nextCharacter = originalPolymer.charAt(i + 1);

                if (!nextCharacter) {
                    // If we make it to the end of the polymer, we should keep the last character.
                    reducedPolymer += currentCharacter;
                } else if (currentCharacter.toUpperCase() !== nextCharacter.toUpperCase()) {
                    // Characters are not the same letter, 
                    // current character can be added to new string.
                    reducedPolymer += currentCharacter;
                } else {
                    // Check cases for current character as uppercase.
                    if (currentCharacter === currentCharacter.toUpperCase()) {
                        if (nextCharacter === nextCharacter.toUpperCase()) {
                            // Characters are the same letter and both are uppercase, 
                            // current character can be added to new string.
                            reducedPolymer += currentCharacter;
                        } else {
                            // Characters are the same letter and opposite cases, 
                            // neither should be added to new string and we should skip processing next character.
                            i++;
                        }
                        // Check cases for current character as lowercase.
                    } else {
                        if (nextCharacter === nextCharacter.toUpperCase()) {
                            // Characters are the same letter and opposite cases, 
                            // neither should be added to new string and we should skip processing next character.
                            i++;
                        } else {
                            // Characters are the same letter and both are lowercase, 
                            // current character can be added to new string.
                            reducedPolymer += currentCharacter;
                        }
                    }
                }
            }

            return reducedPolymer;
        }

        const allLetters = ['A', 'B', 'C', 'D', 'E', 
                            'F', 'G', 'H', 'I', 'J', 
                            'K', 'L', 'M', 'N', 'O', 
                            'P', 'Q', 'R', 'S', 'T', 
                            'U', 'V', 'W', 'X', 'Y', 
                            'Z'];

        let shortestPolymerLength = polymer.length;                        

        for (let letter of allLetters) {
            let currentPolymer = polymer.replace(new RegExp(letter, 'gi'), '');

            let reducedPolymer;
    
            while (true) {
                reducedPolymer = reducePolymer(currentPolymer);
    
                if (reducedPolymer === currentPolymer) {
                    break;
                } else {
                    currentPolymer = reducedPolymer;
                }
            }

            if (reducedPolymer.length < shortestPolymerLength) {
                shortestPolymerLength = reducedPolymer.length;
            }
        }                            

        return shortestPolymerLength;
    }
}

export default solver;