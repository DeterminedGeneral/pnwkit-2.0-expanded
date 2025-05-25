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
exports.default = sendMessage;
const superagent_1 = __importDefault(require("superagent"));
function sendMessage(recipientID, subject, message) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.apiKey)
            throw new Error('SuperAgent: Cannot make a call without an API key!');
        const res = yield superagent_1.default.post(`https://politicsandwar.com/api/send-message/`)
            .query({
            'key': `${this.apiKey}`,
        })
            .field('to', `${recipientID}`)
            .field('subject', `${subject}`)
            .field('message', `${message}`)
            .accept('json')
            .then()
            .catch((e) => {
            throw new Error(`SuperAgent: Failed to make api call, ${e}`);
        });
        if (!res.body.success)
            throw new Error(`SuperAgent: Received no data from API call, ${JSON.stringify(res.body)}`);
        return res.body;
    });
}
