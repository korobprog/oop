import Character from "../character";
import Swordsman from "../class/swordsman";

test("create new Bowerman class", () => {
  const result = new Swordsman("Swordsman", "Swordsman", 1, 40, 10, 100);
  expect(result instanceof Swordsman).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Swordsman",
    type: "Swordsman",
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});
