const request = require('request');
const cheerio = require('cheerio');

const URL_TO_SCRAPE = "someUrl"

request(URL_TO_SCRAPE, (error, response, html) =>{
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html)


    }
})
