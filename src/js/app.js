export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    }

    if (
      ![
        "Bowman",
        "Swordsman",
        "Magician",
        "Daemon",
        "Undead",
        "Zombie",
      ].includes(type)
    ) {
      throw new Error("Недопустимый тип персонажа");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    switch (type) {
      case "Bowman":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Swordsman":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Magician":
        this.attack = 10;
        this.defence = 40;
        break;
      case "Undead":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Zombie":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Daemon":
        this.attack = 10;
        this.defence = 40;
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

export class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
  }
}
