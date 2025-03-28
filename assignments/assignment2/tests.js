"use strict";

const chai = window.chai;
const expect = chai.expect;


//unit tests

//_findNumOfDigits test cases
describe('_findNumOfDigits', () =>  {
    it('should return 4 when the argument is 1000',  () => {
        expect(_findNumOfDigits("1000")).equal(4)
    })
    it('should return 0 when the argument is abcd',  () => {
        expect(_findNumOfDigits("abcd")).equal(0);
    });
    it('should return 2 when the argument is 12',  () => {
        expect(_findNumOfDigits("12")).equal(2);
    });
    it('should return 4 when the argument is COMP1235',  () => {
        expect(_findNumOfDigits("COMP1235")).to.deep.equal(4);
    });
    it('should return 1 when the argument is 0',  () => {
        expect(_findNumOfDigits("0")).equal(1);
    });
    it('should return 4 when the argument is C1O2M3P5',  () => {
        expect(_findNumOfDigits("C1O2M3P5")).equal(4);
    });
});


//_surplus test cases
describe('_surplus', () =>  {
    it('should return a "orange" when the argument is "orange"',  () => {
        
        expect(_surplus("orange")()).equal("orange");
    })
    it('should return a "pear" when the argument is "pear"',  () => {
        expect(_surplus("pear")()).equal("pear");
    });
    it('should return "" when the argument is ""',  () => {
        expect(_surplus("")()).equal("");
    });
});

//_strNumbers test cases
describe('_strNumbers', () =>  {
    it('should return ["1a", "2b"] when the argument is ["1a", "2b"]',  () => {
        expect(_strNumbers(["1a", "a", "2b", "b"])).to.deep.equal(["1a" , "2b"]);
    });
    it('should return ["abc", "abc10"]', () => {
        expect(_strNumbers(["abc", "abc10"])).to.deep.equal(["abc10"]);
    });
    it('should return ["abc", "ab10c", "a10bc", "bcd"]', () => {
        expect(_strNumbers(["abc", "ab10c", "a10bc", "bcd"])).to.deep.equal(["ab10c", "a10bc"]);
    });
    it('should return ["this is a test", "test1"]', () => {
        expect(_strNumbers(["this is a test", "test1"])).to.deep.equal(["test1"]);
    });
});

//_determineClassGrading test cases
describe('_determineClassGrading', () =>  {
    it('should return [3, 1, 56.5] when the argument is [50, 51, 80, 45]',  () => {
        expect(_determineClassGrading([50, 51, 80, 45])).to.deep.equal([3, 1, 56.5]);
    });
    it('should return [0, 4, 40] when the argument is [40, 30, 20, 10]',  () => {
        expect(_determineClassGrading([40, 30, 20, 10])).to.deep.equal([0, 4, 25]);
    });
    it('should return [0, 6, 25.7] when the argument is [35, 45, 25, 10, 6, 33]',  () => {
        expect(_determineClassGrading([35, 45, 25, 10, 6, 33])).to.deep.equal([0, 6, 25.7]);
    });
    
});

//_moveCapitalLetters test cases
describe('_moveCapitalLetters', () =>  {
    it('should return APhpy when the argument is HapPy',  () => {
        expect(_moveCapitalLetters("hApPy")).equal("APhpy");
    });
    it('should return MENTmove when the argument is moveMENT',  () => {
        expect(_moveCapitalLetters("moveMENT")).equal("MENTmove");
    });
    it('should return OCAKEshort when the argument is shOrtCAKE',  () => {
        expect(_moveCapitalLetters("shOrtCAKE")).equal("OCAKEshrt");
    });
});

