interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(text: string): void;
}

class person2 implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(text: string): void {
    console.log(`${text}, ${this.name}`);
  }
}
