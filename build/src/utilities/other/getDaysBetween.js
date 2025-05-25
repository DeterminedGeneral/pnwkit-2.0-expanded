"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getDaysBetween;
/**
 * Get how many days between two dates
 * @param {number} start The start Date
 * @param {number} end The end date
 * @returns {number} How many days between the two dates
 */
function getDaysBetween(start, end) {
    return (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
}
