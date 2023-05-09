import Character from "../character";
import Bowman from "../class/bowman";

test("create new Bowerman class", () => {
  const result = new Bowman("Bowman", "Bowman", 2, 25, 25, 100);
  expect(result instanceof Bowman).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Bowman",
    type: "Bowman",
    level: 2,
    health: 100,
    attack: 25,
    defence: 25,
  });
});
