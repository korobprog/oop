import Character from "../character";

export default class Daemon extends Character {
  constructor(name, type, level, health, attack, defence) {
    super(name, type, level, health, attack, defence);
    this.attack = 10;
    this.defence = 40;
    this.type = "Daemon";
    this.name = "Daemon";
    this.level = 1;
    this.health = 100;
  }
}
