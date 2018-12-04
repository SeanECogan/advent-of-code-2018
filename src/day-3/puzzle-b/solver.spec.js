'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 3 - Puzzle B - Solver', function () {
    describe('findUniqueClaim()', function () {
        it('should return 3 when given example claims', function () {
            const expected = 3;

            const claims = [
                '#1 @ 1,3: 4x4',
                '#2 @ 3,1: 4x4',
                '#3 @ 5,5: 2x2'
            ];

            const actual = solver.findUniqueClaim(claims);

            assert.equal(actual, expected);
        });
    });
});