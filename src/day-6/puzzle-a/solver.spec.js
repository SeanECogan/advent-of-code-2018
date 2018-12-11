'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 6 - Puzzle A - Solver', function () {
    describe('findLargestNonInfiniteArea()', function () {
        it('should return 17 when given example coordinates', function () {
            const expected = 17;

            const coordinates = [
                '1, 1',
                '1, 6',
                '8, 3',
                '3, 4',
                '5, 5',
                '8, 9'
            ];

            const actual = solver.findLargestNonInfiniteArea(coordinates);

            assert.equal(actual, expected);
        });
    });
});