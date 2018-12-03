'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 2 - Puzzle A - Solver', function () {
    describe('calculateChecksum()', function () {
        it('should return 12 when example box IDs', function () {
            const expected = 12;

            const boxIds = [
                'abcdef',
                'bababc',
                'abbcde',
                'abcccd',
                'aabcdd',
                'abcdee',
                'ababab'
            ];

            const actual = solver.calculateChecksum(boxIds);

            assert.equal(actual, expected);
        });
    });
});