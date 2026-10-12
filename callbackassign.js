let browser = "Chrome";
function checkBrowserVersion(callback)
 {
  setTimeout(function() {
    callback(browser);
  }, 2000);
}

function showBrowser(browser) {
  console.log("Browser: " + browser);
}
checkBrowserVersion(showBrowser);

//Arrays - Sum of numbers//
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for 
(let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log("Total sum: " + sum);
