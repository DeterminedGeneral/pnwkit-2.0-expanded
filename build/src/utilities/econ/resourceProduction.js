"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = resourceProduction;
const econ_1 = require("../../interfaces/data/econ");
/**
 * Get resource data
 * @param {number} cities How many cities you have
 * @param {number} resource What type of resource you are making
 * @param {number} slots How many slots are being used
 * @param {boolean} project If you are making uranium and have the project for the resource
 * @returns {number} How much of said resource you produce a day
 */
function resourceProduction(cities, resource, slots, project) {
    switch (resource) {
        case econ_1.resourceType.BAUXITE:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;
        case econ_1.resourceType.COAL:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;
        case econ_1.resourceType.IRON:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;
        case econ_1.resourceType.LEAD:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;
        case econ_1.resourceType.OIL:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;
        case econ_1.resourceType.GASOLINE:
            return (slots * (project ? 1 : 0.5) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;
        case econ_1.resourceType.STEEL:
            return (slots * (project ? 1.02 : 0.75) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;
        case econ_1.resourceType.ALUMINUM:
            return (slots * (project ? 1.02 : 0.75) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;
        case econ_1.resourceType.MUNITIONS:
            return (slots * (project ? 2.01 : 1.5) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;
        case econ_1.resourceType.URANIUM:
            return (slots * (project ? 1 : 0.5) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;
    }
}
