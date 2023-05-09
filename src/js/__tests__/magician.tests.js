import Character from "../character";
import Magician from "../class/magician";

test("create new Bowerman class", () => {
  const result = new Magician("Magician", "Magician", 1, 10, 40, 100);
  expect(result instanceof Magician).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Magician",
    type: "Magician",
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});
