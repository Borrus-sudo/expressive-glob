import ExpressiveGlob from "../lib";
describe("it tests whether the glob code is working or not", () => {
  it("tests some possiblities", () => {
    const glob = new ExpressiveGlob();
    const globString1 = glob.capture.anyChar
      .string(".jpg")
      .anyChar.upto(2)
      .from("ABCDE")
      .end.toGlob();
    glob.flush();
    const globString2 = glob.capture.anyChar
      .string(".png")
      .anyChar.from(2, 5)
      .invert.end.toGlob();
    expect(globString1).toBe("*.jpg??[ABCDE]");
    expect(globString2).toBe("*.png*[!2-5]");
  });
});
