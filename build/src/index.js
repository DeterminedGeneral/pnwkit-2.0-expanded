"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kit = void 0;
const memoizee_1 = __importDefault(require("memoizee"));
const api_1 = __importDefault(require("./api"));
const utilities_1 = __importDefault(require("./utilities"));
/**
 * The main application class
 */
class Kit extends api_1.default {
    constructor() {
        super(...arguments);
        this.utilities = new utilities_1.default;
        this.apiKey = '';
        this.botKey = '';
        this.rateLimitData = {
            resetAfterSeconds: 0,
            limit: 0,
            remaining: 0,
            reset: 0,
        };
    }
    /**
     * Set the pnwkit instance's API Key, bot key.
     * @param {string} apiKey
     * @param {string} botKey
     */
    setKeys(apiKey, botKey) {
        this.apiKey = apiKey;
        if (botKey)
            this.botKey = botKey;
    }
    get rateLimit() {
        return new Proxy(this.rateLimitData, {
            set: () => {
                return false;
            },
        });
    }
    /**
     * Do not call this function, this is internal.
     * @param value
     */
    setRateLimit(value) {
        this.rateLimitData = value;
    }
    /**
     * Lets you cache results of a query call
     *
     * It returns a cached version of the function that accepts the same arguments but caches it for a certain period of time
     * @param {(...args: any[]) => any} queryFunc The query function you want to cache
     * @param {number} maxAgeMinutes The max number of minutes to cache it for
     *
     * @return {Function} returns a cached version of the function
     */
    cached(queryFunc, maxAgeMinutes) {
        return (0, memoizee_1.default)(queryFunc.bind(this), { maxAge: maxAgeMinutes * 60 * 1000, promise: true, primitive: true });
    }
}
exports.Kit = Kit;
const kit = new Kit();
for (const [key] of Object.entries(kit)) {
    exports[key] = kit[key];
}
exports.setKeys = kit.setKeys;
exports.cached = kit.cached;
exports.setRateLimit = kit.setRateLimit;
exports.default = kit;
