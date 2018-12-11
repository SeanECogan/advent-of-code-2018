'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 6 - Puzzle B - Solver', function () {
    describe('findSizeOfSafeRegion()', function () {
        it('should return 16 when given example coordinates and max distance of 32', function () {
            const expected = 16;

            const coordinates = [
                '1, 1',
                '1, 6',
                '8, 3',
                '3, 4',
                '5, 5',
                '8, 9'
            ];

            const maxDistance = 32;

            const actual = solver.findSizeOfSafeRegion(
                coordinates,
                maxDistance);

            assert.equal(actual, expected);
        });
    });
});