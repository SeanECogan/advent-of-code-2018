'use strict';

import solver from './day-1/puzzle-a/solver';

(function () {
    let startTime = new Date();

    solver.calculateFrequency();

    let endTime = new Date();

    let timeElapsed = endTime.getTime() - startTime.getTime();

    console.log(`Puzzle solved in ${timeElapsed}ms.`);
})();