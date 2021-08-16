const target = require("./strip-odd-number");

it("should remove odd numbers", ()=>{
    const evenNumbers = target([1,2,3,4]);
    expect(evenNumbers).toEqual([2,4]);
})
