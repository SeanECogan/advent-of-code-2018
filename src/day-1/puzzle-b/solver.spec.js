'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 1 - Puzzle B - Solver', function () {
    describe('findDuplicateFrequency()', function () {
        it('should return 2 when given [+1, -2, +3, +1]', function () {
            const expected = 2;

            const frequencyChanges = [+1, -2, +3, +1];

            const actual = solver.findDuplicateFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });

        it('should return 0 when given [+1, -1]', function () {
            const expected = 0;

            const frequencyChanges = [+1, -1];

            const actual = solver.findDuplicateFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });

        it('should return 10 when given [+3, +3, +4, -2, -4]', function () {
            const expected = 10;

            const frequencyChanges = [+3, +3, +4, -2, -4];

            const actual = solver.findDuplicateFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });

        it('should return 5 when given [-6, +3, +8, +5, -6]', function () {
            const expected = 5;

            const frequencyChanges = [-6, +3, +8, +5, -6];

            const actual = solver.findDuplicateFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });

        it('should return 14 when given [+7, +7, -2, -7, -4]', function () {
            const expected = 14;

            const frequencyChanges = [+7, +7, -2, -7, -4];

            const actual = solver.findDuplicateFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });
    });
});