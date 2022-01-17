// code assumes that inputs will be valid, positive integers, and returns a true or false value indicating whether the input meets the definition of a 'narcissistic number', with the value of the nuber being the sum of each digit raised to the power of the number of digits in the number. 

const narcissistic = (value)=>{
    //default boolean value to false
    let isNarcissistic = false; 
    //convert parameter to string, then split into individual digits
    let newValue = value.toString().split("")
    //initiate the sum value to 0
    let sum = 0;
    //initiate value of individual digit raised to a power to 0
    let exponentialValue = 0;
    //outer control structure loops through each digit of the number
    for (let i =0; i < newValue.length; i++){
        //exponentialValue set to value of the first digit
        exponentialValue = newValue[i]
        for (let j = 0; j < newValue.length-1; j++){
            // exponentialValue is multiplied by the same digit for the length of the 
            // number -1 (since we already included that first iteration as the intital value)
            exponentialValue *= newValue[i]
        }
        //after each digit is raised to the power of the length of the number, that 
        //exponential value is added to the sum
        sum += exponentialValue;

    }
    //sum is compared to value to determine if they are the same, indicating a narcissistic number
    if (sum == value){
        isNarcissistic = true;
    }

    return isNarcissistic
}
