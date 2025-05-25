"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = foodConsumption;
const getDaysBetween_1 = __importDefault(require("../other/getDaysBetween"));
/**
 * Gets the amount of food consumed in a day
 * @param {number} basePopulation The base population of your cities
 * @param {number} cityAge The age of your oldest city
 * @param {number} cities How many cities you have
 * @returns {number} How much food you consume in a day
 */
function foodConsumption(cities, soldiers, atWar) {
    if (!cities[0].infrastructure)
        throw new Error(`PnwKit: missing cities.infrastructure`);
    if (!cities[0].date)
        throw new Error(`PnwKit: missing cities.date`);
    const newDate = new Date();
    let cost = 0;
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i];
        let oldDate = new Date(city.date);
        cost += (((city.infrastructure * 100) ** 2) / 125000000) + (((city.infrastructure * 100) * (1 + Math.max(Math.log((0, getDaysBetween_1.default)(oldDate, newDate)) / 15, 0)) - city.infrastructure * 100) / 850);
    }
    return cost + (atWar ? soldiers / 500 : soldiers / 750);
}
