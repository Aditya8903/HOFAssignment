// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.

// arr.map(function(ele,idx,arr){}

const items = {
    "item1": 10,
    "item2": 25,
    "item3": 50,
    "item4": 100
  };
  
  const exchangeRate = 80;

let newObj = Object.keys(items).map(function (key, value) {
    return {[key] :items[key]*exchangeRate};
});

console.log(newObj);