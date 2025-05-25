"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = allianceMMR;
const accurateRounding_1 = __importDefault(require("../other/accurateRounding"));
function allianceMMR(alliance) {
    if (alliance.nations == undefined)
        throw new Error(`PnwKit: missing alliance.nations`);
    if (alliance.nations[0].cities == undefined)
        throw new Error(`PnwKit: missing alliance.nations.cities`);
    if (alliance.nations[0].cities[0].barracks == undefined)
        throw new Error(`PnwKit: missing alliance.nations.cities.barracks`);
    if (alliance.nations[0].cities[0].factory == undefined)
        throw new Error(`PnwKit: missing alliance.nations.cities.factory`);
    if (alliance.nations[0].cities[0].hangar == undefined)
        throw new Error(`PnwKit: missing alliance.nations.cities.hangar`);
    if (alliance.nations[0].cities[0].drydock == undefined)
        throw new Error(`PnwKit: missing alliance.nations.cities.drydock`);
    let cities = 0;
    let MMR = {
        totalBarracks: 0,
        totalFactories: 0,
        totalHangars: 0,
        totalDrydocks: 0,
    };
    for (let i = 0; i < alliance.nations.length; i++) {
        let nation = alliance.nations[i];
        for (let j = 0; j < nation.cities.length; j++) {
            let city = nation.cities[j];
            cities++;
            MMR.totalBarracks += city.barracks;
            MMR.totalFactories += city.factory;
            MMR.totalHangars += city.hangar;
            MMR.totalDrydocks += city.drydock;
        }
    }
    MMR.totalBarracks = (0, accurateRounding_1.default)(MMR.totalBarracks /= cities, 2);
    MMR.totalFactories = (0, accurateRounding_1.default)(MMR.totalFactories /= cities, 2);
    MMR.totalHangars = (0, accurateRounding_1.default)(MMR.totalHangars /= cities, 2);
    MMR.totalDrydocks = (0, accurateRounding_1.default)(MMR.totalDrydocks /= cities, 2);
    return MMR;
}
