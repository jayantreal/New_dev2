const request= require("request");

const cheerio= require("cheerio");

let Lastboldata="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";

let highestwicketTacker="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";


let url = "https://www.cricbuzz.com/";

request(url,cb);

function cb(error, response , body){
  parseBody(body);
}

function parseBody(html){
    let ch = cheerio.load(html);
    let aTagKaData = ch('a[data-hover="View All Results"]').text();
  console.log(aTagKaData);
}