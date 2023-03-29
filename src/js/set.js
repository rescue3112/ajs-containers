export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже существует');
    } else {
      this.members.add(character);
    }
  }

  addAll(...chrs) {
    for (const chr of chrs) {
      this.members.add(chr);
    }
  }

  toArray() {
    return [...this.members];
  }
}