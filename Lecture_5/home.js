const request= require("request");

const cheerio= require("cheerio");

const getAllMatches=require("./allmatches");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595",cb);

function cb(error,responce,data){
      parseData(data);
}

function parseData(html){
       let ch= cheerio.load(html);
       let atag=ch('div.ds-border-t.ds-border-line.ds-text-center.ds-py-2 a');
      // console.log(atag);
       let link = atag.attr("href");
       let completelink='https://www.espncricinfo.com'+link;
      console.log(completelink);
      getAllMatches(completelink);

  
}
