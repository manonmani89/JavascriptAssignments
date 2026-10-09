function isPalindrome(str) {
      
length=str.length;  
let revString="";
for(i=length-1;i>=0;i--){ 
    revString = revString + str[i];
}
console.log("the input string is: ", str);
console.log("the reversed string is: ", revString);
if (str == revString) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}

}   
isPalindrome("malayalam");
 