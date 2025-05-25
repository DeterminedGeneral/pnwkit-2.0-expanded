"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = subscriptionChannel;
const GraphQL_1 = __importDefault(require("../../services/GraphQL"));
/**
 * get a subscription channel
 * @param {subscriptionModel} model What model is the channel
 * @param {subscriptionEvent} event What type of event you want
 * @param {subscriptionFilters} filters Filters for the channel
 * @return {void}
 */
function subscriptionChannel(model, event, filters) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (!this.apiKey)
            throw new Error('SubscriptionService: Cannot make a call without an API key!');
        let linkFilter = ``;
        if (filters) {
            let k;
            for (k in filters) {
                (Array.isArray(filters[k])) ? linkFilter += `&${k}=${(_a = filters[k]) === null || _a === void 0 ? void 0 : _a.toString()}` : linkFilter += `&${k}=${filters[k]}`;
            }
        }
        const res = yield GraphQL_1.default.makeChannelCall(model, event, this.apiKey, linkFilter);
        return res.channel;
    });
}
