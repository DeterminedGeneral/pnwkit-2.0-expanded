"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradeType = exports.queryTradesOrderByColumn = void 0;
var queryTradesOrderByColumn;
(function (queryTradesOrderByColumn) {
    queryTradesOrderByColumn["ID"] = "ID";
    queryTradesOrderByColumn["DATE"] = "DATE";
    queryTradesOrderByColumn["DATE_ACCEPTED"] = "DATE_ACCEPTED";
    queryTradesOrderByColumn["OFFER_RESOURCE"] = "OFFER_RESOURCE";
    queryTradesOrderByColumn["OFFER_AMOUNT"] = "OFFER_AMOUNT";
    queryTradesOrderByColumn["PRICE"] = "PRICE";
})(queryTradesOrderByColumn || (exports.queryTradesOrderByColumn = queryTradesOrderByColumn = {}));
var tradeType;
(function (tradeType) {
    tradeType["Global"] = "GLOBAL";
    tradeType["Personal"] = "PERSONAL";
    tradeType["Alliance"] = "ALLIANCE";
})(tradeType || (exports.tradeType = tradeType = {}));
