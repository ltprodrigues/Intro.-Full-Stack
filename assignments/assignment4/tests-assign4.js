"use strict";

const chai = window.chai;
const expect = chai.expect;

//unit test for getRandomNumber function
describe('Get Random Number', () => {
    it('should return a random number between 1 and 5', async () => {
        const randomNumber = await getRandomNumber();
        expect(randomNumber).to.be.closeTo(1, 5);
    });
})

// unit test for getCityData function
describe('Get City Data', () => {
    it('should return city of Toronto with longitude', async () => {
        expect(( await getCityData("Toronto")).longt).to.be.deep.equal('-79.41946');
    });
})

// unit test for fetchProducts function
describe('fetchProducts()', () => {
    it('This async/await function fetches products from the dummy json products API', async () => {
        expect(await fetchProducts(1)).to.deep.equal("Essence Mascara Lash Princess");
        expect(await fetchProducts(12)).to.deep.equal("Annibale Colombo Sofa");
        expect(await fetchProducts(50)).to.deep.equal("Black Whisk");
        expect(await fetchProducts(1000)).to.deep.equal("Could not get products: Error: HTTP error: 404");

        
    });
});

// unit test for searchStorePrice function
describe('searchStorePrice()', () =>  {
    it('This asyn/wait function search products from store',  async () => {
        expect(await searchStorePrice("chicken noodle soup")).to.deep.equal(1.89);
        expect(await searchStorePrice("tomato soup")).to.deep.equal(1.40);
        expect(await searchStorePrice("spam")).to.deep.equal(2.85);
        expect(await searchStorePrice("refried beans")).to.deep.equal(0.99);
    })
})

// unit test for getStarWarsData function
describe('getStarWarsData()', () =>  {
    it('This async/await function fetches star wars characters',  async () => {
        this.timeout(20000);
        
        const charactersCollection = await getStarWarsCharacters();
        expect(charactersCollection.characters["R2-D2"]).to.deep.equal("https://swapi.dev/api/people/3/");
        expect(charactersCollection.characters["Luke Skywalker"]).to.deep.equal("https://swapi.dev/api/people/1/");
        expect(charactersCollection.characters["C-3PO"]).to.deep.equal("https://swapi.dev/api/people/2/");
        
    })

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