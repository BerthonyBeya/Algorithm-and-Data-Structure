//* Given two arrays, create a function that lets a user know (true / false)
//* wether these two arrays contain any common item
//* For example:
//* array1 = ["a", "b", "c", "x"] array2 = ["z","y","i"] Should return false. Else true.

//* Solution 1
/* function commonItem(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(commonItem(["a", "b", "c", "x"], ["z", "y", "i", "c"])); */

//* Solution 2
/* function commonItem(array1, array2) {
  let set = new Set();
  for (let i = 0; i < array1.length; i++) {
    set.add(array1[i]);
  }

  for (let j = 0; j < array2.length; j++) {
    if (set.has(array2[j])) {
      return true;
    }
  }

  return false;
}

console.log(commonItem(["a", "b", "c", "x"], ["z", "y", "i", "x"])); */


