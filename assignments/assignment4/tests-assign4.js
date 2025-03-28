"use strict";

const chai = window.chai;
const expect = chai.expect;

describe('Get Random Number', () => {
    it('should return a random number between 1 and 5', async () => {
        const randomNumber = await getRandomNumber();
        expect(randomNumber).to.be.within(1, 5);
    });
})

/***************************************************************************************
 Testing TEMPLATES

 //To test a regular function
 describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result);
    })
})

 //To test async/await functions
 describe('yourFunctionName()', () =>  {
    it('The async/await function description',  async () => {
          expect(await yourFunctionName()).to.deep.equal(expected_result);
    })
})
 ***************************************************************************************/