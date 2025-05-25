"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cityCost;
const getPercentage_1 = __importDefault(require("../other/getPercentage"));
/**
 * Get the cost of cities
 * @param {number} startingCity The city count you are at now
 * @param {number} endingCity What city you want to be at
 * @param {number} city_average The top 20% average city count
 * @param {boolean} MD If you have Manifest Destiny
 * @param {boolean} GSA If you have Government Agency Support
 * @returns {number} The cost of cities
 */
function cityCost(startingCity, endingCity, city_average, MD, GSA) {
    let costs = 0;
    let percentage = ((MD && GSA) ? 7.5 : (MD ? 5 : 0));
    for (let i = startingCity; i < endingCity; i++) {
        const city_cost = Math.max((100000 * Math.pow((i + 1 - (city_average / 4)), 3))
            + (150000 * (i + 1 - (city_average / 4)))
            + 75000, Math.pow(i + 1, 2) * 100000);
        costs += city_average > i ? (0, getPercentage_1.default)(city_cost, percentage) : city_cost;
    }
    return costs;
}
