function launchBrowser(browserName) {
    if (browserName === "Chrome") { 
        console.log("Launching Chrome browser");    
    }else{
        console.log("Browser is " , browserName);
    }
} 
let browserName = "Firefox";
launchBrowser(browserName);


function runTests(testType) { 
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "sanity":
            console.log("Running sanity tests");
            break;
        case "regression":
            console.log("Running regression tests");
            break;
        default:
            console.log("Default test type is smoke");
    }   
} 
let testType = "xxx";
runTests(testType); 