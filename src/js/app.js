import Swordsman from "./class/swordsman";
import Bowman from "./class/bowman";
import Megician from "./class/magician";
import Daemon from "./class/daemon";
import Zombie from "./class/zombie";
import Undead from "./class/undead";

export class Character {
  constructor(name, type) {
    const list = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ].includes(type);
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    }

    if (!list) {
      throw new Error("Недопустимый тип персонажа");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    switch (type) {
      case "Bowman":
        Bowman.attack;
        Bowman.defence;
        break;
      case "Swordsman":
        Swordsman.attack;
        Swordsman.defence;
        break;
      case "Magician":
        Megician.attack;
        Megician.defence;
        break;
      case "Undead":
        Undead.attack;
        Undead.defence;
        break;
      case "Zombie":
        Zombie.attack;
        Zombie.defence;
        break;
      case "Daemon":
        Daemon.attack;
        Daemon.defence;
        break;
      default:
        throw new Error("Недопустимый тип персонажа");
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Персонаж уже умер!");
    }

    this.level++;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;

    if (this.health < 100) {
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
