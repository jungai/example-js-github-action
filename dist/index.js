"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
(async () => {
    const nameToGreet = core_1.default.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core_1.default.setOutput("time", time);
    const payload = JSON.stringify(github_1.default.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
})().catch((error) => core_1.default.setFailed(error.message));
