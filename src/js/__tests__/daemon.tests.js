import Character from "../character";
import Daemon from "../class/daemon";

test("create new Bowerman class", () => {
  const result = new Daemon("Daemon", "Daemon", 1, 10, 40, 100);
  expect(result instanceof Daemon).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Daemon",
    type: "Daemon",
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});
