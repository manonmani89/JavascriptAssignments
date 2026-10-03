let company="testleaf";  
length=company.length;  
let concatenate="";
for(i=length-1;i>=0;i--){ 
    concatenate = concatenate + company[i];
}
console.log(concatenate);