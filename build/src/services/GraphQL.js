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
const superagent_1 = __importDefault(require("superagent"));
/**
 * An internal method of handling calls to the P&W graphQL API
 */
class GraphQLService {
    constructor() {
        this.politicsAndWarAPIRoot = 'https://api.politicsandwar.com/graphql';
    }
    /**
     * Calls the Politics and War V3 API with a query
     * @param {string} query The GraphQL query to make
     * @param {string} apiKey Your P&W API key
     *
     * @return {Promise<responseAndMetadataI>} Returns data to be type determined in a closer function
     * @throws {Error}
     */
    makeCall(query, apiKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!apiKey)
                throw new Error('GraphQLService: Cannot make a call without an API key!');
            const res = yield superagent_1.default.get(this.politicsAndWarAPIRoot)
                .query({
                api_key: apiKey,
                query,
            })
                .accept('json')
                .then()
                .catch((e) => {
                throw new Error(`GraphQLService: Failed to make api call, ${e}`);
            });
            if (!res.body.data)
                throw new Error(`GraphQLService: Received no data from API call, ${JSON.stringify(res.body)}`);
            return {
                data: res.body.data,
                rateLimit: {
                    resetAfterSeconds: Number(res.get('X-RateLimit-Reset-After')),
                    limit: Number(res.get('X-RateLimit-Limit')),
                    remaining: Number(res.get('X-RateLimit-Remaining')),
                    reset: Number(res.get('X-RateLimit-Reset')),
                },
            };
        });
    }
    /**
   * Calls the Politics and War V3 API with a mutation
   * @param {string} query The GraphQL query to make
   * @param {string} apiKey Your P&W API key
   * @param {string} botKey Your P&W bot key
   *
   * @return {Promise<responseAndMetadataI>} Returns data to be type determined in a closer function
   * @throws {Error}
   */
    makeMutationCall(query, apiKey, botKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!botKey)
                throw new Error('GraphQLService: Cannot make a call without an botKey!');
            if (!apiKey)
                throw new Error('GraphQLService: Cannot make a call without an API key!');
            const res = yield superagent_1.default.get(this.politicsAndWarAPIRoot)
                .query({
                api_key: apiKey,
                query,
            })
                .set({
                'X-Bot-Key': botKey,
                'X-Api-Key': apiKey
            })
                .accept('json')
                .then()
                .catch((e) => {
                throw new Error(`GraphQLService: Failed to make api call, ${e}`);
            });
            if (!res.body.data)
                throw new Error(`GraphQLService: Received no data from API call, ${JSON.stringify(res.body)}`);
            return {
                data: res.body.data,
                rateLimit: {
                    resetAfterSeconds: Number(res.get('X-RateLimit-Reset-After')),
                    limit: Number(res.get('X-RateLimit-Limit')),
                    remaining: Number(res.get('X-RateLimit-Remaining')),
                    reset: Number(res.get('X-RateLimit-Reset')),
                },
            };
        });
    }
    /**
  * Calls the Politics and War V3 API with a mutation
  * @param {string} link The Channel Link
  * @param {string} apiKey Your P&W API key
  *
  * @return {Promise<any>} Returns data to be type determined in a closer function
  * @throws {Error}
  */
    makeChannelCall(model, event, apiKey, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!apiKey)
                throw new Error('GraphQLService: Cannot make a call without an API key!');
            if (!filters)
                filters = ``;
            const res = yield superagent_1.default.get(`https://api.politicsandwar.com/subscriptions/v1/subscribe/${model}/${event}?api_key=${apiKey}${filters}`)
                .catch((e) => {
                throw new Error(`GraphQLService: Failed to make api call, ${e}`);
            });
            return res.body;
        });
    }
    /**
     * Takes a query and outputs query Parameters
     * @param {anyCall} queryParameters Any one of the five queries that take Parameters
     * @param {string} enumeratorParameters Parameters who are represented as strings, but not sent as a string;
     * they are treated like numbers, with no quotes.
     * @return {string}
     */
    generateParameters(queryParameters, enumeratorParameters = []) {
        const parameters = [];
        for (const [parameter, value] of Object.entries(queryParameters)) {
            if (value === undefined)
                continue;
            if (typeof value == 'string' && !enumeratorParameters.includes(parameter)) {
                parameters.push(`${parameter}: "${value}"`);
            }
            else if (typeof value == 'object' && Array.isArray(value)) {
                let interpretedValue = `${parameter}: [`;
                for (const v of value) {
                    if (typeof v == 'string') {
                        interpretedValue += `"${v}",`;
                    }
                    else {
                        interpretedValue += `${v},`;
                    }
                }
                interpretedValue.slice(0, -1);
                interpretedValue += ']';
                parameters.push(interpretedValue);
            }
            else if (typeof value == 'object' && !Array.isArray(value)) {
                // for orderBy handling
                let interpretedValue = '';
                interpretedValue += `${parameter}: {`;
                for (const [k, v] of Object.entries(value)) {
                    interpretedValue += `${k}: ${v},`;
                }
                interpretedValue = interpretedValue.slice(0, -1);
                interpretedValue += '}';
                parameters.push(interpretedValue);
            }
            else {
                parameters.push(`${parameter}: ${value}`);
            }
        }
        if (parameters.length == 0)
            return '';
        const joinedParameters = parameters.join(',');
        return `(${joinedParameters})`;
    }
}
exports.default = new GraphQLService();
