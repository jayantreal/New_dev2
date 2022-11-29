const request = require("request");
const cheerio = require("cheerio");
const getMatch = require("./matches");

function getAllMatches(link){
    request( link  , cb );
}

function cb(error , response , data){
    parseData(data);
}

function parseData(html){
    let ch = cheerio.load(html);
    let j=0;
    let allATags = ch('div.ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent a');
    
    for(let i=0 ; i<allATags.length ; i++){
        let aTag = allATags[i+""];
        let link = ch(aTag).attr("href");
        let completeLink = "https://www.espncricinfo.com"+link;
        if(link.length>50){
        //console.log(completeLink);
        getMatch(completeLink);
        }
       

    }
    console.log(j);
}

module.exports = getAllMatches;

// module.exports.getAllMatches = getAllMatches;