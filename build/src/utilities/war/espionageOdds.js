"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = espionageOdds;
const war_1 = require("../../interfaces/data/war");
/**
 * Get spy odds
 * @param {number} safetyLevel The safety level of the spy operation
 * @param {operationType} operation The type of operation you want to run
 * @param {number} yourSpies How many spies you have
 * @param {number} enemySpies How many spies the enemy has
 * @returns {number} spy odds
 */
function espionageOdds(safetyLevel, operation, yourSpies, enemySpies, policy) {
    let odds = safetyLevel * 25 + (yourSpies * 100 / ((enemySpies * 3) + 1));
    switch (operation) {
        case war_1.operationType.TANKS:
            odds = odds / 1.5;
            break;
        case war_1.operationType.AIRCRAFT:
            odds = odds / 2;
            break;
        case war_1.operationType.SHIPS:
            odds = odds / 3;
            break;
        case war_1.operationType.MISSILES:
            odds = odds / 4;
            break;
        case war_1.operationType.NUKES:
            odds = odds / 5;
            break;
        case war_1.operationType.GATHERINTELLIGENCE:
            odds = odds / 1;
            break;
        case war_1.operationType.ASSASSINATESPIES:
            odds = odds / 1.5;
            break;
        case war_1.operationType.SOLDIERS:
            odds = odds / 1;
            break;
        case war_1.operationType.TERRORIZECIVILIANS:
            odds = odds / 1;
            break;
    }
    switch (policy) {
        case war_1.warPolicy.ARCANE:
            odds *= 0.85;
            break;
        case war_1.warPolicy.TACTICIAN:
            odds *= 1.15;
            break;
        case war_1.warPolicy.COVERT:
            odds *= 1.15;
            break;
        default:
            break;
    }
    if (odds > 100)
        odds = 100;
    return odds;
}
