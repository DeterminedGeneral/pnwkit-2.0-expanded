"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cityCost_1 = __importDefault(require("./econ/cityCost"));
const foodConsumption_1 = __importDefault(require("./econ/foodConsumption"));
const foodProduction_1 = __importDefault(require("./econ/foodProduction"));
const infraCost_1 = __importDefault(require("./econ/infraCost"));
const landCost_1 = __importDefault(require("./econ/landCost"));
const resourceProduction_1 = __importDefault(require("./econ/resourceProduction"));
const accurateRounding_1 = __importDefault(require("./other/accurateRounding"));
const getPercentage_1 = __importDefault(require("./other/getPercentage"));
const spyRange_1 = __importDefault(require("./war/spyRange"));
const warRange_1 = __importDefault(require("./war/warRange"));
const espionageOdds_1 = __importDefault(require("./war/espionageOdds"));
const battleSimulations_1 = require("./war/battleSimulations");
const cityEffects_1 = require("./econ/cityEffects");
const projectCost_1 = __importDefault(require("./econ/projectCost"));
const cityIncome_1 = __importDefault(require("./econ/cityIncome"));
const allianceMMR_1 = __importDefault(require("./war/allianceMMR"));
const nationMMR_1 = __importDefault(require("./war/nationMMR"));
const sphereTiering_1 = __importDefault(require("./war/sphereTiering"));
const activeWars_1 = __importDefault(require("./war/activeWars"));
const allianceTiering_1 = __importDefault(require("./war/allianceTiering"));
const checkProjectBit_1 = __importDefault(require("./econ/checkProjectBit"));
const getDaysBetween_1 = __importDefault(require("./other/getDaysBetween"));
class PnwKitUtils {
    constructor() {
        this.getPercentage = getPercentage_1.default;
        this.accurateRounding = accurateRounding_1.default;
        this.infraCost = infraCost_1.default;
        this.landCost = landCost_1.default;
        this.cityCost = cityCost_1.default;
        this.foodProduciton = foodProduction_1.default;
        this.foodConsumption = foodConsumption_1.default;
        this.resourceProduction = resourceProduction_1.default;
        this.warRange = warRange_1.default;
        this.spyRange = spyRange_1.default;
        this.espionageOdds = espionageOdds_1.default;
        this.groundBattle = battleSimulations_1.groundBattle;
        this.airBattle = battleSimulations_1.airBattle;
        this.seaBattle = battleSimulations_1.seaBattle;
        this.pollution = cityEffects_1.pollution;
        this.pollutionIndex = cityEffects_1.pollutionIndex;
        this.crime = cityEffects_1.crime;
        this.disease = cityEffects_1.disease;
        this.projectCost = projectCost_1.default;
        this.cityIncome = cityIncome_1.default;
        this.allianceMMR = allianceMMR_1.default;
        this.nationMMR = nationMMR_1.default;
        this.sphereTiering = sphereTiering_1.default;
        this.activeWars = activeWars_1.default;
        this.allianceTiering = allianceTiering_1.default;
        this.checkProjectBit = checkProjectBit_1.default;
        this.getDaysBetween = getDaysBetween_1.default;
    }
}
exports.default = PnwKitUtils;
