const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const url = "https://random.waxy.org/images/screenshots/";

fetch(url)
  .then(res => res.text())
  .then(text => {
    const $ = cheerio.load(text);
    const imgs = $("td a[href*='.']").toArray();
    const data = imgs.reduce((acc, img) => {
      const href = $(img).attr("href");
      return href && typeof href === "string" ? acc.concat(href) : acc;
    }, []);

    fs.writeFileSync(
      path.join(__dirname, "../public/data.json"),
      JSON.stringify({ baseUrl: url, images: data })
    );
  })
  .catch(err => {
    console.error("Error: something went wrong.", err);
  });
