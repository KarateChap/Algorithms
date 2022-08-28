function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

function sameArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    frequencyCounter1[num]
      ? (frequencyCounter1[num] += 1)
      : (frequencyCounter1[num] = 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    frequencyCounter2[num]
      ? (frequencyCounter2[num] += 1)
      : (frequencyCounter2[num] = 1);
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const SameAray2 = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  const lookup = {};

  for (const value of arr1) {
    lookup[value ** 2] = (lookup[value ** 2] || 0) + 1;
  }

  for (const value of arr2) {
    if (!lookup[value]) return false;
    lookup[value] -= 1;
  }

  return true;
};

console.log(SameAray2([1, 2, 2, 3], [4, 1, 4, 10]));
