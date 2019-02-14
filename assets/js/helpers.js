const chunkArray = (arr, chunkSize) => { // eslint-disable-line
  const results = [];

  while (arr.length) {
    results.push(arr.splice(0, chunkSize));
  }

  return results;
};
