const chunkArray = (arr, chunkSize) => { // eslint-disable-line
  const results = [];

  while (arr.length) {
    results.push(arr.splice(0, chunkSize));
  }

  return results;
};

const capFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1); // eslint-disable-line
