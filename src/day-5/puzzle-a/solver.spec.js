'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 5 - Puzzle A - Solver', function () {
    describe('findLengthOfReducedPolymer()', function () {
        it('should return 10 when given example polymer', function () {
            const expected = 10;

            const polymer = 'dabAcCaCBAcCcaDA';

            const actual = solver.findLengthOfReducedPolymer(polymer);

            assert.equal(actual, expected);
        });
    });
});