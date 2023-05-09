import Character from "../character";
import Zombie from "../class/zombie";

test("create new Bowerman class", () => {
  const result = new Zombie("Zombie", "Zombie", 1, 40, 10, 100);
  expect(result instanceof Zombie).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Zombie",
    type: "Zombie",
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});
