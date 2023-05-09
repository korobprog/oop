export default class Character {
  constructor(type, name, level, health, attack, defence) {
    this.type = type;
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
  }
  calcLength(type, name) {
    const list = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!list.includes(type)) {
      throw new Error("Недопустимый тип персонажа");
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    }
    return list;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Персонаж уже умер!");
    }
    if (this.health < 100) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error("Персонаж уже умер!");
    }

    this.health -= points * (1 - this.defence / 100);

    if (this.health < 0) {
      this.health = 0;
    }
  }
}
