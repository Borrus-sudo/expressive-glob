export default class ExpressiveGlob {
  private glob: string = "";
  private history = [];
  string(input: string) {
    if (this.history[this.history.length - 1] === "escape")
      input = '"' + input + '"';
    this.glob += input;
    this.history.push("string");
    return this;
  }
  upto(times: number) {
    if (this.history[this.history.length - 1] !== "anyChar") {
      throw new Error("Error: `upto` used without calling `anyChar` property");
    }
    this.glob = this.glob.slice(0, this.glob.length - 1) + "?".repeat(times);
    this.history.push("upto");
    return this;
  }
  from(rangeStart: string | number, rangeEnd?: string | number) {
    if (
      ["from", "upto", "anyChar"].indexOf(
        this.history[this.history.length - 1],
      ) === -1
    ) {
      throw new Error("Error: usage of `from` is out of context");
    }
    if (this.history[this.history.length - 1] !== "from") {
      this.glob += "[";
    }
    let range: string | number = "";
    if (rangeEnd) range = `${rangeStart}-${rangeEnd}`;
    else range = rangeStart;
    this.glob += range;
    this.history.push("from");
    return this;
  }
  toGlob() {
    return this.glob;
  }
  flush() {
    this.glob = "";
  }
  get anyChar() {
    this.glob += "*";
    this.history.push("anyChar");
    return this;
  }
  get escape() {
    this.history.push("escape");
    return this;
  }
  get capture() {
    return this;
  }
  get end() {
    if (
      ["from", "invert"].indexOf(this.history[this.history.length - 1]) === -1
    ) {
      throw new Error("Error: `end` used without calling `from`");
    }
    this.glob += "]";
    this.history.push("end");
    return this;
  }
  get invert() {
    if (this.history[this.history.length - 1] !== "from") {
      throw new Error("Error: `invert` used without calling `from`");
    }
    const lastPos = this.glob.lastIndexOf("[");
    this.glob =
      this.glob.slice(0, lastPos + 1) + "!" + this.glob.slice(lastPos + 1);
    this.history.push("invert");
    return this;
  }
}
