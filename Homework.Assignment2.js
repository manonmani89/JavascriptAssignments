function Calculate(num) {
    if (num>0){
        return "Positive number";
    } else if (num<0){
        return "Negative number";
    } else {
        return "Zero";
    }}
    let num=12;
    console.log(Calculate(num));