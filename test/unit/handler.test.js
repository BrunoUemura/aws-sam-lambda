"use strict";

const app = require("../../src/index");
const event = require("../../events/event.json");
let context;

describe("Tests index", function () {
  it("verifies successful response", async () => {
    const result = await app.lambdaHandler(event, context);
    const response = JSON.parse(result.body);

    expect(result).toHaveProperty("statusCode");
    expect(result.statusCode).toBe(200);

    expect(response).toHaveProperty("message");
    expect(response.message).toEqual("Hello Bruno Uemura");
  });
});
