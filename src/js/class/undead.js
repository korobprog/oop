import Character from "../character";

export default class Undead extends Character {
  constructor(name, type, level, health, attack, defence) {
    super(name, type, level, health, attack, defence);
    this.attack = 25;
    this.defence = 25;
    this.type = "Undead";
    this.name = "Undead";
    this.level = 1;
    this.health = 100;
  }
}
