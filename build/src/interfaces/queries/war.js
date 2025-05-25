"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryWarsOrderByColumn = exports.warType = void 0;
var warType;
(function (warType) {
    warType["Ordinary"] = "ORDINARY";
    warType["Attrition"] = "ATTRITION";
    warType["Raid"] = "RAID";
})(warType || (exports.warType = warType = {}));
var queryWarsOrderByColumn;
(function (queryWarsOrderByColumn) {
    queryWarsOrderByColumn["Id"] = "ID";
    queryWarsOrderByColumn["Date"] = "DATE";
})(queryWarsOrderByColumn || (exports.queryWarsOrderByColumn = queryWarsOrderByColumn = {}));
