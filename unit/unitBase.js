var unit = require("./unitTest"),
    expect = require("chai").expect,
    should = require("chai").should;

describe("加法测试",function () {
    it("1+1 = 2",function(){
        expect(unit.add(1,1)).to.equal(2);
    })
})

describe("numToString",function(){
    it("getSome String ",function(){
        expect(unit.getString(2,2)).to.equal("22");
    })
    it("get String",function(){
        expect(unit.put([23,22,12,33])).to.equal(23);
    })
})
