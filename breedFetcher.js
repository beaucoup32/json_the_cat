const request = require("request");
const breed = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (err, response, body) => {
    if (err) {
      console.log("Error: Broken link...");
      return;
    }

    const data = JSON.parse(body);

    if (!data[0]) {
      console.log(`Error: ${breed} not found...`);
      return;
    }
    console.log(data[0].description);
  }
);
