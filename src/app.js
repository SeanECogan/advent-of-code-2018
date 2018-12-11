'use strict';

import solver from './day-6/puzzle-b/solver';

(function () {
    let startTime = new Date();

    solver.solve();

    let endTime = new Date();

    let timeElapsed = endTime.getTime() - startTime.getTime();

    console.log(`Puzzle solved in ${timeElapsed}ms.`);
})();