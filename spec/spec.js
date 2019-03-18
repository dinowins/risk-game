import { dice } from "./../src/business-logic.js";

describe("Dice", function() {
  let rolls = dice.roll();

  it('should add dice total to usa total', function() {
    let usa = 10;
    let totaling = rolls + usa;
    expect(totaling).toBeGreaterThan(10);
  })
})
