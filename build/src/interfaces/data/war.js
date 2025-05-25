"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warPolicy = exports.operationType = void 0;
var operationType;
(function (operationType) {
    operationType["GATHERINTELLIGENCE"] = "Gather Intelligence";
    operationType["TERRORIZECIVILIANS"] = "Terrorize Civilians";
    operationType["SOLDIERS"] = "Sabotage Soldiers";
    operationType["TANKS"] = "Sabotage Tanks";
    operationType["AIRCRAFT"] = "Sabotage Aircraft";
    operationType["SHIPS"] = "Sabotage Ships";
    operationType["ASSASSINATESPIES"] = "Assassinate Spies";
    operationType["MISSILES"] = "Sabotage Missiles";
    operationType["NUKES"] = "Sabotage Nukes";
})(operationType || (exports.operationType = operationType = {}));
var warPolicy;
(function (warPolicy) {
    warPolicy["ATTRITION"] = "Attrition";
    warPolicy["TURTLE"] = "Turtle";
    warPolicy["BLITZKRIEG"] = "Blitzkrieg";
    warPolicy["FORTRESS"] = "Fortress";
    warPolicy["MONEYBAGS"] = "Moneybags";
    warPolicy["PIRATE"] = "Pirate";
    warPolicy["TACTICIAN"] = "Tactician";
    warPolicy["GUARDIAN"] = "Guardian";
    warPolicy["COVERT"] = "Covert";
    warPolicy["ARCANE"] = "Arcane";
})(warPolicy || (exports.warPolicy = warPolicy = {}));
