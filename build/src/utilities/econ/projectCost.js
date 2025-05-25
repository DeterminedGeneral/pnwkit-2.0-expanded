"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = projectCost;
const econ_1 = require("../../interfaces/data/econ");
const getPercentage_1 = __importDefault(require("../other/getPercentage"));
/**
 * Get the cost of any project
 * @param {projects} project The project you want to get the cost of
 * @param {resourcePrices} resourcePrices The prices of each resource
 * @param {boolean} TA If you have Technology Advancement
 * @param {boolean} GSA If you have Government Support Agency
 * @returns {number} The cost of the project
 */
function projectCost(project, resourcePrices, TA, GSA) {
    let key;
    for (key in resourcePrices) {
        if (!resourcePrices[key])
            throw new Error(`PnwKit: missing resource: ${key}`);
    }
    let percentage = 100 - ((TA && GSA) ? 7.5 : (TA ? 5 : 0));
    let price = 0;
    switch (project) {
        case econ_1.projects.AC:
            price = (0, getPercentage_1.default)(500000 + (resourcePrices.food * 1000), percentage);
            break;
        case econ_1.projects.AEC:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.munitions * 10000) + (resourcePrices.gasoline * 10000) + (resourcePrices.uranium * 1000), percentage);
            break;
        case econ_1.projects.APE:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.aluminum * 20000) + (resourcePrices.munitions * 40000) + (resourcePrices.gasoline * 20000), percentage);
            break;
        case econ_1.projects.ALA:
            price = (0, getPercentage_1.default)(3000000 + (resourcePrices.coal * 1500) + (resourcePrices.lead * 1500), percentage);
            break;
        case econ_1.projects.AS:
            price = (0, getPercentage_1.default)(10000000 + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;
        case econ_1.projects.BW:
            price = (0, getPercentage_1.default)(10000000 + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;
        case econ_1.projects.BDA:
            price = (0, getPercentage_1.default)(20000000 + (resourcePrices.food * 500000) + (resourcePrices.coal * 8000) + (resourcePrices.iron * 8000) + (resourcePrices.oil * 8000) + (resourcePrices.bauxite * 8000) + (resourcePrices.oil * 8000) + (resourcePrices.lead * 8000), percentage);
            break;
        case econ_1.projects.CoCE:
            price = (0, getPercentage_1.default)(3000000 + (resourcePrices.oil * 1000) + (resourcePrices.iron * 1000) + (resourcePrices.bauxite * 1000), percentage);
            break;
        case econ_1.projects.CRC:
            price = (0, getPercentage_1.default)(10000000 + (resourcePrices.food * 100000), percentage);
            break;
        case econ_1.projects.EGR:
            price = (0, getPercentage_1.default)(10000000 + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;
        case econ_1.projects.FS:
            price = (0, getPercentage_1.default)(25000000 + (resourcePrices.food * 100000) + (resourcePrices.lead * 10000) + (resourcePrices.steel * 10000) + (resourcePrices.aluminum * 15000), percentage);
            break;
        case econ_1.projects.GT:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.food * 100000) + (resourcePrices.aluminum * 10000) + (resourcePrices.iron * 10000) + (resourcePrices.oil * 10000), percentage);
            break;
        case econ_1.projects.GSA:
            price = (0, getPercentage_1.default)(20000000 + (resourcePrices.aluminum * 10000) + (resourcePrices.food * 200000), percentage);
            break;
        case econ_1.projects.GS:
            price = (0, getPercentage_1.default)(20000000 + (resourcePrices.munitions * 40000) + (resourcePrices.uranium * 40000) + (resourcePrices.gasoline * 40000) + (resourcePrices.aluminum * 40000) + (resourcePrices.steel * 20000), percentage);
            break;
        case econ_1.projects.IA:
            price = (0, getPercentage_1.default)(5000000 + (resourcePrices.steel * 500) + (resourcePrices.gasoline * 500), percentage);
            break;
        case econ_1.projects.ITC:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.aluminum * 10000), percentage);
            break;
        case econ_1.projects.ID:
            price = (0, getPercentage_1.default)(15000000 + (resourcePrices.munitions * 5000), percentage);
            break;
        case econ_1.projects.IW:
            price = (0, getPercentage_1.default)(10000000 + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;
        case econ_1.projects.MI:
            price = (0, getPercentage_1.default)(10000000 + (resourcePrices.food * 50000) + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;
        case econ_1.projects.MS:
            price = (0, getPercentage_1.default)(20000000 + (resourcePrices.aluminum * 5000) + (resourcePrices.steel * 5000) + (resourcePrices.gasoline * 5000), percentage);
            break;
        case econ_1.projects.MLP:
            price = (0, getPercentage_1.default)(15000000 + (resourcePrices.munitions * 5000) + (resourcePrices.gasoline * 5000) + (resourcePrices.aluminum * 5000), percentage);
            break;
        case econ_1.projects.MRL:
            price = (0, getPercentage_1.default)(200000000 + (resourcePrices.oil * 20000) + (resourcePrices.aluminum * 20000) + (resourcePrices.munitions * 20000) + (resourcePrices.steel * 20000) + (resourcePrices.gasoline * 20000) + (resourcePrices.uranium * 20000), percentage);
            break;
        case econ_1.projects.ML:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.oil * 5000) + (resourcePrices.aluminum * 5000) + (resourcePrices.munitions * 5000) + (resourcePrices.steel * 5000) + (resourcePrices.gasoline * 5000) + (resourcePrices.uranium * 10000), percentage);
            break;
        case econ_1.projects.NLF:
            price = (0, getPercentage_1.default)(750000000 + (resourcePrices.uranium * 50000) + (resourcePrices.gasoline * 50000) + (resourcePrices.aluminum * 50000), percentage);
            break;
        case econ_1.projects.NRF:
            price = (0, getPercentage_1.default)(75000000 + (resourcePrices.uranium * 5000) + (resourcePrices.gasoline * 5000) + (resourcePrices.aluminum * 5000), percentage);
            break;
        case econ_1.projects.PE:
            price = (0, getPercentage_1.default)(25000000 + (resourcePrices.coal * 7500) + (resourcePrices.iron * 7500) + (resourcePrices.oil * 7500) + (resourcePrices.bauxite * 7500) + (resourcePrices.oil * 7500) + (resourcePrices.lead * 7500), percentage);
            break;
        case econ_1.projects.PB:
            price = (0, getPercentage_1.default)(10000000 + (resourcePrices.gasoline * 2000) + (resourcePrices.munitions * 2000) + (resourcePrices.aluminum * 2000) + (resourcePrices.steel * 2000), percentage);
            break;
        case econ_1.projects.RI:
            price = (0, getPercentage_1.default)(10000000 + (resourcePrices.food * 100000), percentage);
            break;
        case econ_1.projects.RnD:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.aluminum * 5000) + (resourcePrices.food * 100000) + (resourcePrices.uranium * 1000), percentage);
            break;
        case econ_1.projects.SP:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.aluminum * 25000), percentage);
            break;
        case econ_1.projects.SPTP:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.food * 250000) + (resourcePrices.aluminum * 5000), percentage);
            break;
        case econ_1.projects.SS:
            price = (0, getPercentage_1.default)(20000000 + (resourcePrices.oil * 10000) + (resourcePrices.bauxite * 10000) + (resourcePrices.iron * 10000) + (resourcePrices.lead * 10000) + (resourcePrices.uranium * 10000), percentage);
            break;
        case econ_1.projects.SN:
            price = (0, getPercentage_1.default)(50000000 + (resourcePrices.aluminum * 50000) + (resourcePrices.bauxite * 15000) + (resourcePrices.iron * 15000) + (resourcePrices.lead * 15000) + (resourcePrices.coal * 15000), percentage);
            break;
        case econ_1.projects.TS:
            price = (0, getPercentage_1.default)(300000000 + (resourcePrices.oil * 10000) + (resourcePrices.aluminum * 10000) + (resourcePrices.iron * 10000) + (resourcePrices.uranium * 10000), percentage);
            break;
        case econ_1.projects.UEP:
            price = (0, getPercentage_1.default)(25000000 + (resourcePrices.uranium * 2500) + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;
        case econ_1.projects.AC:
            price = (0, getPercentage_1.default)(40000000 + (resourcePrices.steel * 5000) + (resourcePrices.aluminum * 5000) + (resourcePrices.munitions * 5000) + (resourcePrices.gasoline * 5000), percentage);
            break;
    }
    return price;
}
