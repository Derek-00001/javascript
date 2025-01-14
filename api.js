// API - Application Programming Interface
// Fetch API - It provides an interface for fetching(sending/receiving) resouces. 
// It uses "request" and "Response" Object
// the fetch() method is used to fetch a resource(data) 
// SYNTAX 
// let promise = fetch (url,[options]);
// note- options is not compulsory but okay for this.

// know how to call/invoke an api call using fetch()
// const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL);
// console.log(promise);

// now do the same using async-await function

const getfacts = async () => {
    const URL = "https://cat-fact.herokuapp.com/facts";
    let promise = await fetch(URL);
    console.log(promise);

    // using json
    let data = await promise.json();
    console.log(data);
    console.log(data[0].text); 
}

// jis request ka kaam sirf data return krna hota hai they are called GET request.

// Let's understand some new terms

// AJAX - is asynchronous js & xml

// json - is javascript object notation

// json() method - returns a second promise that resolves with the result of parsing the response body text as json. (input is json, output is js object), that means it gives us the data in usable and readable form. how to do that ?...... see above


