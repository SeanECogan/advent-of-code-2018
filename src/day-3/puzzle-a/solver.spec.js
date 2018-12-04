'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 3 - Puzzle A - Solver', function () {
    describe('calculateOverlapArea()', function () {
        it('should return 4 when given example claims', function () {
            const expected = 4;

            const claims = [
                '#1 @ 1,3: 4x4',
                '#2 @ 3,1: 4x4',
                '#3 @ 5,5: 2x2'
            ];

            const actual = solver.calculateOverlapArea(claims);

            assert.equal(actual, expected);
        });
    });
});