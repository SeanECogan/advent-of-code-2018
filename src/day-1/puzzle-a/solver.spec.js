'use strict';

import assert from 'assert';
import solver from './solver';

describe('Day 1 - Puzzle A - Solver', function () {
    describe('calculateFinalFrequency()', function () {
        it('should return 3 when given [+1, -2, +3, +1]', function () {
            const expected = 3;

            const frequencyChanges = [+1, -2, +3, +1];

            const actual = solver.calculateFinalFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });

        it('should return 3 when given [+1, +1, +1]', function () {
            const expected = 3;

            const frequencyChanges = [+1, +1, +1];

            const actual = solver.calculateFinalFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });

        it('should return 0 when given [+1, +1, -2]', function () {
            const expected = 0;

            const frequencyChanges = [+1, +1, -2];

            const actual = solver.calculateFinalFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });

        it('should return -6 when given [-1, -2, -3]', function () {
            const expected = -6;

            const frequencyChanges = [-1, -2, -3];

            const actual = solver.calculateFinalFrequency(frequencyChanges);

            assert.equal(actual, expected);
        });
    });
});