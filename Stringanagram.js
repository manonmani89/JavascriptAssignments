//String Anagram Example:1
let s="Hello world"
let splitword=s.split(" ")
let lastindex=splitword.length-1
let lastword=splitword[lastindex]
console.log("The last word is",lastword)
let lastwordlength=lastword.length
console.log("The length of last word is", lastwordlength)

Example:2
let s1=" fly me to the moon "
let trims1=s1.trim();
let sliptedword1=trims1.split(" ");
let lastindex1=sliptedword1.length-1
let lastword1=sliptedword1[lastindex1]
console.log("The last word is",lastword1)
let lastwordlength1=lastword1.length
console.log("The length of last word",lastwordlength1)

/*Example:3
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false*/
function isAnagram(str1, str2) {
  const a = str1.toLowerCase();
  const b = str2.toLowerCase();
  console.log(a,b)  
  const sortedA = a.split("").sort().join("");
  const sortedB = b.split("").sort().join("");
  if (sortedA === sortedB){
    return true;
  }{
    return false;
  }
}
console.log(isAnagram('listen', 'silent')); 
console.log(isAnagram('hello', 'world')); 




