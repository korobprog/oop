import Character from "../app";

export default class Zombie extends Character {
  constructor(name, type = "Bowman") {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
