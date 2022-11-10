let fs = require("fs");

let f1kadata=fs.readFileSync("./f1.txt");

f1kadata =f1kadata+"";

//console.log(f1kadata);

// -s to remove extra spaces 

let data = f1kadata.split("\r\n");

//console.log(data);

let removeSpace = [];
let emptyPushed=false;

function removeLargeSpace(data){
    for(let i=0;i<data.length;i++){
        if(data[i]== '' && !emptyPushed){
            removeSpace.push(data[i]);
            emptyPushed=true;
        }
        else if(data[i]!=''){
            removeSpace.push(data[i]);
        }
    }
}

removeLargeSpace(data);

//console.log(removeLargeSpace);

let joinedString = removeSpace.join("\n");

console.log(joinedString);


// -b add line number

function addLineNumberToNonEmptyLine(data){
    let count=1;

    for(let i=0;i<data.length;i++){
        if(data[i]!=''){
            data[i]=`${count}.${data[i]}`;
            count++;
        }
    }
    let addLineNumber = data.join("\n");
    console.log(addLineNumber);
}
addLineNumberToNonEmptyLine(data);

// - n => add count to all lines

function addLineNumberToallLines(data){
    for(let i=1 ; i<data.length+1;i++){
        data[i-1]=`${i}.${data[i-1]}`;
    }
    let addedLineNumber = data.join("\n");
    console.log(addedLineNumber);
}

addLineNumberToallLines(data);