const { describe, expect, test } = require("@jest/globals");

const Our = require("../app");

describe("Checking convertor", function () {
  test("to 5 seconds", function () {
    expect(Our(5200)).toBe("5 seconds");
  });

  test("to 1 minute", function () {
    expect(Our(60000)).toBe("1 minute");
  });

  test("to 3 minutes", function () {
    expect(Our(180000)).toBe("3 minutes");
  });

  test("convert to 3 minutes 20 seconds", function () {
    expect(Our(200000)).toBe("3 minutes 20 seconds");
  });
});
