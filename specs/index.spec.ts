import { describe, expect, it } from "@jest/globals";

import App from "../src/index";

describe("Start App", () => {
  it(`should return a "Hello World" message`, () => {
    expect(App.run()).toBe("Hello World");
  });
});
