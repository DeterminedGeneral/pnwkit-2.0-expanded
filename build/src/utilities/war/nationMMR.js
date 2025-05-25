"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = nationMMR;
const accurateRounding_1 = __importDefault(require("../other/accurateRounding"));
/**
 * Get a nation's MMR
 * @param {nation} nation The nation you want to get MMR from
 * @returns {MMR} The nation's MMR
 */
function nationMMR(nation) {
    if (nation.cities == undefined)
        throw new Error(`PnwKit: missing nation.cities`);
    if (nation.cities[0].barracks == undefined)
        throw new Error(`PnwKit: missing nation.cities.barracks`);
    if (nation.cities[0].factory == undefined)
        throw new Error(`PnwKit: missing nation.cities.factory`);
    if (nation.cities[0].hangar == undefined)
        throw new Error(`PnwKit: missing nation.cities.hangar`);
    if (nation.cities[0].drydock == undefined)
        throw new Error(`PnwKit: missing nation.cities.drydock`);
    let MMR = {
        totalBarracks: 0,
        totalFactories: 0,
        totalHangars: 0,
        totalDrydocks: 0,
    };
    for (let i = 0; i < nation.cities.length; i++) {
        let city = nation.cities[i];
        MMR.totalBarracks += city.barracks;
        MMR.totalFactories += city.factory;
        MMR.totalHangars += city.hangar;
        MMR.totalDrydocks += city.drydock;
    }
    MMR.totalBarracks = (0, accurateRounding_1.default)(MMR.totalBarracks /= nation.cities.length, 2);
    MMR.totalFactories = (0, accurateRounding_1.default)(MMR.totalFactories /= nation.cities.length, 2);
    MMR.totalHangars = (0, accurateRounding_1.default)(MMR.totalHangars /= nation.cities.length, 2);
    MMR.totalDrydocks = (0, accurateRounding_1.default)(MMR.totalDrydocks /= nation.cities.length, 2);
    return MMR;
}
