import Character from "../character";

describe("Character class", () => {
  let character;

  beforeEach(() => {
    character = new Character("Bowman", "Roook", 1, 100, 25, 25);
  });

  describe("calcLength method", () => {
    it("should throw an error if character type is not valid", () => {
      expect(() => {
        character.calcLength("invalid type", "Robin");
      }).toThrowError("Недопустимый тип персонажа");
    });

    it("should throw an error if character name length is not between 2 and 10", () => {
      expect(() => {
        character.calcLength("Bowman", "R");
      }).toThrowError("Имя должно содержать от 2 до 10 символов");

      expect(() => {
        character.calcLength("Bowman", "Robiiiiiiiiiiin");
      }).toThrowError("Имя должно содержать от 2 до 10 символов");
    });

    it("should return the list of valid character types", () => {
      const expected = [
        "Bowman",
        "Swordsman",
        "Magician",
        "Daemon",
        "Undead",
        "Zombie",
      ];
      const result = character.calcLength("Bowman", "Robin");
      expect(result).toEqual(expected);
    });
  });

  describe("levelUp method", () => {
    it("should throw an error if character health is 0", () => {
      character.health = 0;
      expect(() => {
        character.levelUp();
      }).toThrowError("Персонаж уже умер!");
    });

    it("should increase level, attack, defence and restore health", () => {
      character.levelUp();
      expect(character.level).toBe(1);
      expect(character.attack).toBe(25);
      expect(character.defence).toBe(25);
      expect(character.health).toBe(100);
    });

    it("should not affect health if it is already 100", () => {
      character.health = 100;
      character.levelUp();

      expect(character.health).toBe(100);
    });
  });

  describe("damage method", () => {
    it("should throw an error if character health is 0", () => {
      character.health = 0;
      expect(() => {
        character.damage(10);
      }).toThrowError("Персонаж уже умер!");
    });

    it("should decrease health according to the damage taken", () => {
      character.damage(10);
      expect(character.health).toBe(25);
    });

    it("should not set health below 0", () => {
      character.damage(200);
      expect(character.health).toBe(0);
    });
  });
});
