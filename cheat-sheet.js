// Arrays

// Checking if a variable is an array:
function isArray(arr) {
    return Array.isArray(arr);
}
// Checking if a value exists in an array:
function isInArray(value, array) {
    return array.indexOf(value) !== -1;
}
// Adding an element to an array:
function addToArray(value, array) {
    if(array.indexOf(value) === -1) {
        array.push(value);
    }
}
// Removing an element from an array:
function removeFromArray(value, array) {
    var index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
// Finding the maximum value in an array:
function maxOfArray(array) {
    return Math.max.apply(null, array);
}

// Objects

// Checking if a key exists in an object:
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
// Getting a value from an object with a default:
function getValue(obj, key, defaultValue) {
    return obj.hasOwnProperty(key) ? obj[key] : defaultValue;
}
// Setting a value in an object:
function setValue(obj, key, value) {
    obj[key] = value;
}
// Deleting a key from an object:
function deleteKey(obj, key) {
    delete obj[key];
}
// Iterating over an object's keys:
function iterateKeys(obj, callback) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            callback(key, obj[key]);
        }
    }
}
// Copying an object (shallow copy):
function shallowCopy(obj) {
    return { ...obj };
}
// Copying an object (deep copy):
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// ES6

// Promises and Async/Await for handling asynchronous operations:
// promise
new Promise((resolve, reject) => {
    setTimeout(() => resolve("Result"), 1000);
})
.then(result => console.log(result));

// async/await
async function asyncFunc() {
    let response = await fetch('api/some.json');
    let data = await response.json();
    console.log(data);
}
// Spread and Rest operators:
let parts = ['shoulders', 'knees']; 
let lyrics = ['head', ...parts, 'and', 'toes']; 

// rest in function parameters
function f(...args) {
  return args;
}
