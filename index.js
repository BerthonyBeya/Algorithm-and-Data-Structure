//* Given an array with a nested array inside of it, [1, 2, 3, [4, 5, 6], 1]
//* Display all the elements in one array in the same order.
//* Solution
/* function combineArrays(array) {
  const combineArrays = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") {
      array[i].forEach((element) => {
        combineArrays.push(element);
      });
    } else {
      combineArrays.push(array[i]);
    }
  }

  return combineArrays;
}

console.log(combineArrays([1, 2, 3, [4, 5, 6], 1])); */

//* Given an array with 0s at the end [1, 2, 3, 4, 5, 0, 0], display those zeros at the beginning of the array [0, 0, 1, 2, 3, 4, 5].
function zerosAtTheFront(array) {
  const zeros = [];
  const rest = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeros.push(array[i]);
    } else {
      rest.push(array[i]);
    }
  }

  //* return [...zeros, ...rest];
  return zeros.concat(rest);
}

console.log(zerosAtTheFront([1, 2, 3, 4, 5, 0, 0]));

//* //////////////////////////////////////////////////////////////////////////////////////
//* //////////////////////////////////////////////////////////////////////////////////////
//* THE ALGORITHMS AND DATA STRUCTURE COURSE BIGINS HERE!!! //////////////////////////////
//* //////////////////////////////////////////////////////////////////////////////////////
//* //////////////////////////////////////////////////////////////////////////////////////
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
