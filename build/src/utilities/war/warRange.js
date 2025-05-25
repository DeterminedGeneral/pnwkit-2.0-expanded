"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = warRange;
/**
 * Get war ranges
 * @param {number} score The nation's score
 * @returns {warRanges} war ranges
 */
function warRange(score) {
    return {
        OffensiveWarRangeMin: score * 0.75,
        OffensiveWarRangeMax: score * 2.5,
        DefensiveWarRangeMin: score / 0.75,
        DefensiveWarRangeMax: score / 2.5,
    };
}
