'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 2 - Puzzle B - Solver', function () {
    describe('findCommonLettersInBoxIDs ()', function () {
        it('should return fgij when example box IDs', function () {
            const expected = 'fgij';

            const boxIds = [
                'abcde',
                'fghij',
                'klmno',
                'pqrst',
                'fguij',
                'axcye',
                'wvxyz'
            ];

            const actual = solver.findCommonLettersInBoxIDs(boxIds);

            assert.equal(actual, expected);
        });
    });
});