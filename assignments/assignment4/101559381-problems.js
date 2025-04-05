"use strict";

//Async 1: get random number
async function getRandomNumber() {
    return new Promise(resolve => 
        (setTimeout(() => resolve(Math.floor(Math.random() * 5)+1), 5)));
}

//Async 2: Get City Data
async function getCityData(city) {
    try {
        // Fetch data from the API
        const response = await fetch(`https://geocode.xyz/toronto?json=1`);
        
        // Check if response is ok (status 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON response
        const city = await response.json();

        // Check if longitude (longt) exists in the response
        if (!city.longt) {
            throw new Error("Longitude coordinate not found.");
        }

        return city; // Return the city data
    } catch (error) {
        console.error("Error fetching city data:", error);
        return null; // Return null in case of an error
    }
}

// Example Usage:
getCityData("Toronto").then(city => {
    if (city) {
        console.log("Longitude:", city.longt); // Expected: -79.41946
    }
});


// Async 3: Fetch Product
async function fetchProducts(id) {
    try {
        // Use the id parameter dynamically in the URL
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        
        // Check if response is ok 
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // Parse JSON response
        const product = await response.json();
        return product.title;
    } catch (error) {
        return `Could not get products: Error: ${error.message}`;
    }
}

//async function 4: search store price
async function searchStorePrice(product_name) {
    try
    {
        const response = await fetch(`https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse JSON response
    const products = await response.json();

    // Check if the product_name parameter is provided
    if (!product_name) {
        throw new Error("Missing product name parameter");
    }

    // Use find() to locate the product by name
    const product = products.find(item => item.name === product_name);

    //if procuct is not found, throw an error
    if (!product) {
        throw new Error(`Product "${product_name}" not found`);
    }

    return product.price;
} catch (error) {
    throw new Error(`Could not get products: ${error.message}`);
}
}



//Async 5: Star Wars API
async function getStarWarsCharacters() {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const charactersCollection = {};

        data.results.forEach(character => {
            charactersCollection[character.name] = character.url;
        });

        return { characters: charactersCollection };
    } catch (error) {
        console.error("Error fetching Star Wars data:", error);
        throw error; // Rethrow the error for further handling
    }
}

console.log(charactersCollection);