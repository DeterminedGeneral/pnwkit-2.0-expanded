"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disease = disease;
exports.crime = crime;
exports.pollution = pollution;
exports.radiationIndex = radiationIndex;
exports.pollutionIndex = pollutionIndex;
exports.population = population;
const getPercentage_1 = __importDefault(require("../other/getPercentage"));
/**
 * Gets the amount of disease in a city
 * @param {number} infra How much infra a city has
 * @param {number} land How much land the city has
 * @param {number} hospitals How many hospitals the city has
 * @param {number} pollution How much pollution the city has
 * @param {boolean} CRC If the nation has Clinical Research Center
 * @returns {number} How much disease is in the city
 */
function disease(infra, land, hospitals, pollution, CRC) {
    return ((0.01 * (((infra * 100) / (land + 0.001)) ** 2) - 25) / 100) + (infra / 1000) - (hospitals * (CRC ? 3.5 : 2.5)) + (pollution * 0.05);
}
/**
 * Gets the amount of disease in a city
 * @param {number} commerce How much commerce a city has
 * @param {number} infra How much infra the city has
 * @param {number} policeStations How many police stations the city has
 * @param {boolean} SPTP If the nation has Specialized Police Training Program
 * @returns {number} How much crime is in the city
 */
function crime(commerce, infra, policeStations, SPTP) {
    return (((103 - commerce) ** 2) + (infra * 100)) / (111111) - (policeStations * (SPTP ? 3.5 : 2.5));
}
/**
 * Gets the amount of pollution in a city
 * @param {number} pollutionIndex How the pollution index is the city
 * @returns {number} How much pollution is in the city
 */
function pollution(pollutionIndex) {
    return pollutionIndex * 0.05;
}
/**
* Gets the radiation index of a nation
* @param {number} continentRadiation How much radiation the continenet has
* @param {number} globalRadition How much radiation Orbis has
* @returns {number} The radiation of the nation
*/
function radiationIndex(continentRadiation, globalRadition) {
    return (continentRadiation + globalRadition) / 1000;
}
/**
 * Gets the pollution index in a city
 * @param {number} coalPowerPlants How much coal power plants a city has
 * @param {number} oilPowerPlants How much oil power plants a city has
 * @param {number} coalMines How much coal mines a city has
 * @param {number} oilWells How much oil wells a city has
 * @param {number} ironMines How much iron mines a city has
 * @param {number} bauxiteMines How much bauxite mines a city has
 * @param {number} leadMines How much lead mines a city has
 * @param {number} uraniumMines How much uranium mines a city has
 * @param {number} farms How much frams a city has
 * @param {number} oilRefineries How much oil refineries a city has
 * @param {number} steelMills How much steel mills a city has
 * @param {number} aluminumRefineries How much aluminum refineries a city has
 * @param {number} munitionsFactories How much munitions factories a city has
 * @param {number} policeStations How much police stations a city has
 * @param {number} hospitals How much hospitals a city has
 * @param {number} recyclingCenters How much recyling centers a city has
 * @param {number} subways How much subways a city has
 * @param {number} shoppingMalls How much shopping malls a city has
 * @param {number} stadiums How much stadiums a city has
 * @param {boolean} GT If the nation has Green Technologies
 * @param {boolean} RI If the nation has Recycling Initiative
 * @returns {number} How much the pollution index is in the city
 */
function pollutionIndex(coalPowerPlants, oilPowerPlants, coalMines, oilWells, ironMines, bauxiteMines, leadMines, uraniumMines, farms, oilRefineries, steelMills, aluminumRefineries, munitionsFactories, policeStations, hospitals, recyclingCenters, subways, shoppingMalls, stadiums, GT, RI) {
    let powerPollution = (coalPowerPlants * 8) + (oilPowerPlants * 6);
    let minePollution = ((coalMines + oilWells + ironMines + bauxiteMines + leadMines) * 12) + (uraniumMines * 20) + (farms * (GT ? 1 : 2));
    let manuPollution = GT ? (0, getPercentage_1.default)((steelMills * 40) + (aluminumRefineries * 40) + (munitionsFactories * 32), 75) : (oilRefineries * 32) + (steelMills * 40) + (aluminumRefineries * 40) + (munitionsFactories * 32);
    let civilPollution = ((policeStations + (hospitals * 4) - (recyclingCenters * (RI ? 75 : 70))) - (subways * (GT ? 70 : 45)));
    let commercePollution = (shoppingMalls * 2) + (stadiums * 5);
    return powerPollution + minePollution + manuPollution + civilPollution + commercePollution;
}
/**
 * Gets the population of a city
 * @param {number} infra How the infra the city has
 * @param {number} disease How much disease is in the city
 * @param {number} crime How much crime is in the city
 * @returns {number} How much the city population is
 */
function population(infra, disease, crime) {
    return (infra * 100) - ((disease * 100 * infra) / 100) - Math.max((crime / 10) * (100 * infra) - 25, 0);
}
