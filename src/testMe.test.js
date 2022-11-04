const TestMe = require("./testMe")

test("test", () => {
    const testMe = new TestMe()
    expect(testMe.sayHi("Anita")).toBe("Hi Anita")
})
