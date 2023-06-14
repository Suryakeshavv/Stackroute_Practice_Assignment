//Write a JavaScript conditional statement to find the largest of five numbers
function getLargest(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
      return a;
    }
    if (b > a && b > c && b > d && b > e) {
      return b;
    }
    if (c > a && c > b && c > d && a > e) {
      return c;
    }
    if (d > a && d > b && d > c && d > e) {
      return d;
    }
    if (e > a && e > b && e > c && e > d) {
      return e;
    }
  }
  
  console.log(getLargest(1, 2, 3, 4, 5));
  console.log(getLargest(2, 3, 4, 5, 1));
  console.log(getLargest(3, 4, 5, 1, 2));
  console.log(getLargest(4, 5, 1, 2, 3));
  console.log(getLargest(5, 1, 2, 3, 4));




//Write a JavaScript program to sort array of strings in both ascending and descending order
function compareArrays(arr1, arr2) {
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);
    console.log(`First in ascending order: ${arr1[0]} and ${arr2[0]}`);
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    console.log(`Last in descending order: ${arr1[arr1.length - 1]} and ${arr2[arr2.length - 1]}`);
  }
  
  var one = [10, 20, 30, 40, 50, 60, 70, 80];
  var two = [60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  compareArrays(one, two);



  

// //Write a JavaScript program to remove duplicate items from an array
let arr = ["apple", "mango",
"apple", "orange", "mango", "mango"];
function removeDuplicates(arr) {
let unique = [];
for (i = 0; i < arr.length; i++) {
if (unique.indexOf(arr[i]) === -1) {
  unique.push(arr[i]);
}
}
return unique;
}
console.log(removeDuplicates(arr));





