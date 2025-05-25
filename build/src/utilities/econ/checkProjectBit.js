"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkProjectBit;
/**
 * Check if a nation has a certain project based on their project bits
 * @param {string} projectBits The nations project bits
 * @param {projectBits} projectBit The project bit your looking for
 * @return {boolean} if the nation has the project or not
 */
function checkProjectBit(projectBits, projectBit) {
    return (Number(projectBits) & (1 << projectBit)) != 0 ? true : false;
}
