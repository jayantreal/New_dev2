let content = process.argv.slice(2);

let fs= require("fs");

let flags=[];

let files=[];

for(let i=0;i<content.length;i++){
    if(content[i].startsWith('-')){
        flags.push(content[i])
    }
    else{
        files.push(content[i]);
    }
}

let fileKadata="";
for(let i=0;i<files.length;i++){
    fileKadata+=fs.readFileSync(files[i]);
    fileKadata+=" ";
}

console.log(fileKadata);