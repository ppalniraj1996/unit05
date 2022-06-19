const { test, describe, expect } = require("@jest/globals");
const money = require("../tax_calculator");

describe("Checking tax for different amounts", function () {
  test("Less than 2,50,000", function () {
    expect(money(2000)).toBe("No_Tax");
  });
  test("Less than 2,50,000", function () {
    expect(money(2497979)).toBe("No_Tax");
  });
  test("Less than 5,00,000", function () {
    expect(money(450000)).toBe(22500);
  });
  test("Less than 5,00,000", function () {
    expect(money(425653)).toBe(21282);
  });
  test("Less than 10,00,000", function () {
    expect(money(700000)).toBe(98000);
  });
  test("Less than 10,00,000", function () {
    expect(money(824698)).toBe(115457);
  });
  test("Greater than 10,00,000", function () {
    expect(money(1100000)).toBe(297000);
  });
  test("Greater than 100,00,000", function () {
    expect(money(10000000)).toBe(2700000);
  });
});
