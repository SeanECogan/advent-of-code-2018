'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 5 - Puzzle B - Solver', function () {
    describe('findLengthOfShortestPolymer()', function () {
        it('should return 4 when given example polymer', function () {
            const expected = 4;

            const polymer = 'dabAcCaCBAcCcaDA';

            const actual = solver.findLengthOfShortestPolymer(polymer);

            assert.equal(actual, expected);
        });
    });
});