import {
  Undead,
  Zombie,
  Daemon,
  Magician,
  Swordsman,
  Bowman,
  Character,
} from "../app";

let character = Character;

describe("levelUp", () => {
  test("should increase level, attack and defence", () => {
    character = new Undead("Undead");
    character.levelUp();
    expect(character).toEqual({
      name: "Undead",
      type: "Undead",
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    });
  });

  test("should set health to 100 if it is less than 100", () => {
    character = new Zombie("Zombie");
    character.health = 80;
    character.levelUp();
    expect(character.health).toBe(100);
  });

  test("should throw an error if character is dead", () => {
    character = new Magician("Magician");
    character.health = 0;
    expect(() => {
      character.levelUp();
    }).toThrow("Персонаж уже умер!");
  });
});

describe("damage", () => {
  test("should decrease health by given points", () => {
    character = new Bowman("Bowman");
    character.damage(10);
    expect(character.health).toBeCloseTo(96);
  });

  test("should decrease health by calculating defence percentage", () => {
    character = new Swordsman("Swordsman");
    character.damage(10);
    expect(character.health).toBeCloseTo(96);
  });

  test("should set health to 0 if it is less than 0", () => {
    character = new Magician("Magician");
    character.health = 10;
    character.damage(1000);
    expect(character.health).toBe(0);
  });

  test("should throw an error if character is dead", () => {
    const character = new Daemon("Daemon");
    character.health = 0;

    expect(() => {
      character.damage(10);
    }).toThrow("Персонаж уже умер!");
  });
});
