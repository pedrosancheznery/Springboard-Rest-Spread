// 1. filterOutOdds
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// 2. findMin
const findMin = (...args) => Math.min(...args);

// 3. mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// 4. doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)];

// 5. removeRandom
const removeRandom = items => {
  const idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

// 6. extend
const extend = (array1, array2) => [...array1, ...array2];

// 7. addKeyVal
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// 8. removeKey
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

// 9. combine
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// 10. update
const update = (obj, key, val) => ({ ...obj, [key]: val });
