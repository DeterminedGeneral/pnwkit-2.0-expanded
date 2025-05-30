"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = foodProduction;
const cityEffects_1 = require("./cityEffects");
/**
 * Get how much food a nation makes in a day
 * @param {nation} nation The nation in question
 * @param {gameInfo} gameInfo game info
 * @param {foodProductionSeasons} season What season it is for the nation
 * @param {boolean} MI If the nation has mass irrigation
 * @returns {number} How much food said nation produces in a day
 */
function foodProduction(nation, gameInfo, season, MI) {
    var _a, _b;
    if (!nation.continent)
        throw new Error(`PnwKit: missing nations.continent`);
    if (!nation.cities[0].farm)
        throw new Error(`PnwKit: missing cities.farms`);
    if (!nation.cities[0].land)
        throw new Error(`PnwKit: missing cities.land`);
    if (!((_a = gameInfo.radiation) === null || _a === void 0 ? void 0 : _a.global))
        throw new Error(`PnwKit: missing game_info.radiation.global`);
    if (!gameInfo.radiation[nation.continent])
        throw new Error(`PnwKit: missing game_info.radiation.global`);
    let cost = 0;
    let landUsed = MI ? 400 : 500;
    let continentRadiation = gameInfo.radiation[nation.continent];
    for (let i = 0; i < nation.cities.length; i++) {
        let city = nation.cities[i];
        cost += city.farm * city.land / landUsed * (1 + Math.max(city.farm - 1, 0) / 38) * season * (1 + (0, cityEffects_1.radiationIndex)(continentRadiation, (_b = gameInfo.radiation) === null || _b === void 0 ? void 0 : _b.global) / -1000);
    }
    return cost;
}
