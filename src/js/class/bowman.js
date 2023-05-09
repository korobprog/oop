import Character from "../character";

export default class Bowman extends Character {
  constructor(name, type, level, health, attack, defence) {
    super(name, type, level, health, attack, defence);
    this.attack = 25;
    this.defence = 25;
    this.type = "Bowman";
    this.name = "Bowman";
    this.level = 2;
    this.health = 100;
  }
}
