const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (err, response, body) => {
      if (err) {
        callback(err, null);
        return;
      }

      const data = JSON.parse(body);

      if (!data[0]) {
        callback(`${breedName} not found...`, null);
        return;
      }
      callback(err, data[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
