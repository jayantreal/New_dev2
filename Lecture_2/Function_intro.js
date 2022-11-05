function getfirstname(fullname){
fullname = fullname.split(" ");
return fullname[0];
}

function getsecondname(fullname){
 fullname = fullname.split(" ");
return fullname[1];
}

function sayhi(fullname, fun ){
let name =fun(fullname);
console.log(name);


}

sayhi("Jayant Kumar",getfirstname);

sayhi("rahdhe saham",getsecondname);