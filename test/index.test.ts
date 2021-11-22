import "mocha";
import { expect } from "chai";
import { getGlobalWords, getWords } from "../src/index";
import { exec } from "child_process";

describe("get node module api words", function () {
  it("node version 14.18.1 all modules API words length is 954", function () {
    // FIXME: not working
    exec("n 14.18.1");
    const words = getGlobalWords();
    expect(words.length).to.be.deep.equal(954);
  });
});

describe("get fs module api words", function () {
  it("node version 14.18.1 fs module API words length is 118", function () {
    // FIXME: not working
    exec("n 14.18.1");
    const words = getWords('fs');
    expect(words.length).to.be.deep.equal(118);
  });
});

describe("get vue3.2.22 module api words", function () {
  it("node version 14.18.1 vue module API words length is 270", function () {
    // FIXME: not working
    exec("n 14.18.1");
    const words = getWords('vue');
    expect(words.length).to.be.deep.equal(270);
  });
});
