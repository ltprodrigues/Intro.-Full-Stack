// DDI RULE
//D => describe the file name
//D => describe the function name
//IT => it => content/ return values to match the result
//describe('array', function (){})
describe('array', function() {
    describe('calculateAge', function(){
        it('should return an array', function(){
            //match the resulting var
            expect(calculateAge(ages)).equals(3);
            expect(calculateAge(ages1)).equals(9)
        })
    })
});

