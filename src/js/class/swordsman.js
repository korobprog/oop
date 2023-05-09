import Character from "../character";

export default class Swordsman extends Character {
  constructor(name, type, level, health, attack, defence) {
    super(name, type, level, health, attack, defence);
    this.attack = 40;
    this.defence = 10;
    this.type = "Swordsman";
    this.name = "Swordsman";
    this.level = 1;
    this.health = 100;
  }
}
