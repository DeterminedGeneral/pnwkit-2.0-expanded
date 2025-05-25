"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = spyRange;
/**
 * Get a nation's spy range
 * @param {number} score The nation's score
 * @returns {spyRanges} spy ranges
 */
function spyRange(score) {
    return {
        OffensiveSpyRangeMin: score * 0.40,
        OffensiveSpyRangeMax: score * 2.50,
        DefensiveSpyRangeMin: score / 0.40,
        DefensiveSpyRangeMax: score / 2.50,
    };
}
