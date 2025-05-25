"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alliancePositionEnum = exports.queryAlliancesOrderByColumn = void 0;
var queryAlliancesOrderByColumn;
(function (queryAlliancesOrderByColumn) {
    queryAlliancesOrderByColumn["ID"] = "ID";
    queryAlliancesOrderByColumn["DATE"] = "DATE";
    queryAlliancesOrderByColumn["SCORE"] = "SCORE";
})(queryAlliancesOrderByColumn || (exports.queryAlliancesOrderByColumn = queryAlliancesOrderByColumn = {}));
var alliancePositionEnum;
(function (alliancePositionEnum) {
    alliancePositionEnum["Remove"] = "REMOVE";
    alliancePositionEnum["Noalliance"] = "NOALLIANCE";
    alliancePositionEnum["Applicant"] = "APPLICANT";
    alliancePositionEnum["Member"] = "MEMBER";
    alliancePositionEnum["Officer"] = "OFFICER";
    alliancePositionEnum["Heir"] = "HEIR";
    alliancePositionEnum["Leader"] = "LEADER";
})(alliancePositionEnum || (exports.alliancePositionEnum = alliancePositionEnum = {}));
