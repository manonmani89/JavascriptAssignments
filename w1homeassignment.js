//print login and the opentaps string from the url 'https://leaftaps.com/opentaps/control/login'
let url='https://leaftaps.com /opentaps /control /login'
let url1=url.split()
console.log(url1);
let url2=url.split(' ')
console.log(url2);
let url3=url.split('/')
console.log(url3);
console.log(url3[3]);
console.log(url3[5]);
 

//count the number of vowels in the string 'cucumber'
let str='cucumber'
let count=0 
for (let char of str){
    if('aeiou'.includes(char)){
        count++                     
    } }                                      
console.log(count);

//Write a javascript program to find the largest of three numbers.
let num1=35
let num2=98
let num3=56
if (num1>num2 && num1>num3){
    console.log(num1+" is the largest number")
}
else if(num2>num1 && num2>num3){
    console.log(num2+" is the largest number")
}
else{
    console.log(num3+" is the largest number")
}       