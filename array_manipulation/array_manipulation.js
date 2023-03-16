var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Array before manipulation: " + fruits);
// Append a string to the end of the array
fruits.push("fig");
console.log("Array after appending: " + fruits);
// Prepend a string to the beginning of the array
fruits.unshift("apricot");
console.log("Array after prepending: " + fruits);
// Remove a string from a specific index in the array and replace it with another string
fruits.splice(2, 1, "grape");
console.log("Array after replacing: " + fruits);
