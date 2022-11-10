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
    fileKadata+="\r\n";
}

//console.log(fileKadata);

if(!flags.length){
    console.log(fileKadata);
    return;
}

let data =fileKadata.split("\r\n");

let removeSpaces =[];

if(flags.includes("-s")){
removeLargeSpace(data);
}

if(flags.includes("-n") && flags.includes("-b")){
    if(flags.indexOf("-n") < flags.indexOf("-b")){
        if(flags.includes("-s")){
            addLineNumberToallLines(removeSpaces);
        }else{
            addLineNumberToallLines(data);
        }
    }
}else if(flags.includes("-n")){
    if(flags.includes("-s")){
        addLineNumberToallLines(removeSpaces);
    }else{
        addLineNumberToallLines(data);

    }

}
else if(flags.includes("-b")){
    if(flags.includes("-s")){
        addLineNumberToNonEmptyLine(removeLargeSpace);
    }else{
        addLineNumberToallLines(data);
    }

}






function addLineNumberToallLines(data){
    for(let i=1 ; i<data.length+1;i++){
        data[i-1]=`${i}.${data[i-1]}`;
    }
    let addedLineNumber = data.join("\n");
    console.log(addedLineNumber);
}

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

function removeLargeSpace(data){
    let emptyPushed =false;
    for(let i=0;i<data.length;i++){
        if(data[i]== '' && !emptyPushed){
            removeSpaces.push(data[i]);
            emptyPushed=true;
        }
        else if(data[i]!=''){
            removeSpaces.push(data[i]);
        }
    }
}