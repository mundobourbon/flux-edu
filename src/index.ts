const who = "World";

class Greeting {
  static hello(who: string) {
    return `Hello ${who}`;
  }
}

Greeting.hello(who)