function getNum(num){
    if ((num % 3 == 0) && (num % 5 == 0))
    {
       
        return "FizzBuzz";
    }
    else if (num % 5 == 0){
        
        return "Buzz";
    }
    else if (num %3 == 0){
    
        return "Fizz";
    }
    else {

        return num;
    }
    
    
}

export default getNum;
// divisble 3 return fizz
// divisible 5 return buzz
// divisible 3 5 return fizzbuzz
// else return num