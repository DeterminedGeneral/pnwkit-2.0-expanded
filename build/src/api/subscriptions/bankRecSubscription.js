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
exports.default = bankRecSubscription;
const pusher_js_1 = __importDefault(require("pusher-js"));
const subscriptions_1 = require("../../interfaces/subscriptions");
/**
 * Subscribe to get alliance positions in real time
 * @param channel The channel to subscribe to
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {subscriptionCluster} [cluster=subscriptionCluster.OHIO] The location of the subscription server
 * @return {void}
 */
function bankRecSubscription(channel_1, event_1, callback_1) {
    return __awaiter(this, arguments, void 0, function* (channel, event, callback, cluster = subscriptions_1.subscriptionCluster.OHIO) {
        const pusher = new pusher_js_1.default("a22734a47847a64386c8", {
            cluster: cluster,
            wsHost: "socket.politicsandwar.com",
            disableStats: true,
            authEndpoint: "https://api.politicsandwar.com/subscriptions/v1/auth",
        });
        const newChannel = pusher.subscribe(channel);
        newChannel.bind(`BULK_BANKREC_${event.toUpperCase()}`, callback);
        return;
    });
}
