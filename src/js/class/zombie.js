import Character from "../character";

export default class Zombie extends Character {
  constructor(name, type, level, health, attack, defence) {
    super(name, type, level, health, attack, defence);
    this.attack = 40;
    this.defence = 10;
    this.type = "Zombie";
    this.name = "Zombie";
    this.level = 1;
    this.health = 100;
  }
}
