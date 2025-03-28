"use strict";

const chai = window.chai;
const expect = chai.expect;

//unit tests

//circle constructor test cases
describe ('Circle Constructor', () => {
 it('this circle constructor should return the area and perimeter when circle is 3', () => {
     
     expect(new Circle(3).area()).to.deep.equal(28.27);
     expect(new Circle(3).perimeter()).to.deep.equal(18.85);
     
    });
 it('this circle constructor should return the area and perimeter when circle is 6', () => {
    expect(new Circle(6).area()).to.deep.equal(113.10);
    expect(new Circle(6).perimeter()).to.equal(37.70);
    });
})

//calculate salary test cases
describe('Lucky Seven', () => {
    it('should return 400 when the worked hours are [8,8,8,8,8,0,0]', () => {
        expect(calculateSalary([8,8,8,8,8,0,0])).to.equal(400);
    });
    it('should return 560 when the worked hours are [0,0,0,0,0,12,12]', () => {
        expect(calculateSalary([0,0,0,0,0,12,12])).to.equal(560);
    });
    it('should return 780 when the worked hours are [8, 8, 8, 8, 8, 8, 10]', () => {
        expect(calculateSalary([8, 8, 8, 8, 8, 8, 10])).to.equal(780);
    });

})

//index multiplier test cases
describe('Index Multiplier', () => { 
    it ('should return 40 when the array is [1,2,3,4,5]', () => {
        expect(indexMultiplier([1,2,3,4,5])).to.equal(40);
    });
    it ('should return 16 when the array is [-3,0,8]', () => {
        expect(indexMultiplier([-3,0,8])).to.equal(16);
    });
    it('should return 10 when the array is [-5,0,5]', () => {
        expect(indexMultiplier([-5,0,5])).to.equal(10);
    });

});

//filtered JSON test cases
describe ('Filtered JSON functions', () => {
    it('should return [] when  the JSON is [{id: 1, username: "batman"}]', () => {
        expect(filteredJSON([{ id: 1, username: 'batman' }])).to.deep.equal([]);
    });
    it('should pass the test when the JSON is [{ id: 15, username: "Michael"}]', () => {
        expect(filteredJSON([{ id: 15, username: 'Michael' }])).to.deep.equal([{ id: 15, username: 'Michael' }]);
    });
    it('should pass the test when the JSON is [{ id: 12, username: "spidey"}]', () => {
        expect(filteredJSON([{ id: 12, username: 'spidey' }])).to.deep.equal([{ id: 12, username: 'spidey' }]);
    });

});

//breakAway test cases
describe ('Break Away', () => {
    it('should return [[1,2,3], [4,5,6], [7,8,9]] when the array is [1,2,3,4,5,6,7,8,9]', () => {   
        expect(breakAway([1,2,3,4,5,6,7,8,9], 3)).to.deep.equal([[1,2,3], [4,5,6], [7,8,9]]);
    });
    it('should return [[1,2],[3,4],[5,6],[7,8],[9]] when the array is [1,2,3,4,5,6,7,8,9]', () => {
        expect(breakAway([1,2,3,4,5,6,7,8,9], 2)).to.deep.equal([[1,2], [3,4], [5,6], [7,8], [9]]);
    });
    it('should return [[1,2,3,4,5,6,7,8,9]] when the array is [1,2,3,4,5,6,7,8,9]', () => {
        expect(breakAway([1,2,3,4,5,6,7,8,9], 9)).to.deep.equal([[1,2,3,4,5,6,7,8,9]]);
    });

});

   



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