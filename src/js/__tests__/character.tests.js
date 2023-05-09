import Character from "../character";
import Undead from "../class/undead";

test("create new Bowerman class", () => {
  const result = new Undead("Undead", "Undead", 1, 25, 25, 100);
  expect(result instanceof Undead).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Undead",
    type: "Undead",
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});
