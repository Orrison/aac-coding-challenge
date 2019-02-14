// Split an array into sub arrays of a particular size
const chunkArray = (arr, chunkSize) => { // eslint-disable-line
  const results = [];

  while (arr.length) {
    results.push(arr.splice(0, chunkSize));
  }

  return results;
};

// Capatilize the first letting of the provided string
const capFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1); // eslint-disable-line
