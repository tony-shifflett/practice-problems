const descendingOrder = (n)=>{
    //initialize an empty string to hold output
    let biggerNum = "";
    //convert integer to string, split into individual digits, sort them, reverse them, then add them to the empty string via concatenation to form new number
    let digits = n.toString().split("").sort().reverse().map((num)=>biggerNum+=num)
    //convert new number to integer from string
    biggerNum = parseInt(biggerNum) 
    // return result
    return biggerNum
}

descendingOrder(1234)