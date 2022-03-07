
import getNum from '../main.js'

//test 1
describe('getNum',() =>
{
  
    describe('Fizz', ()=> {
       test("divisible 3 is fizz ", ()=> {
           expect(getNum(3)).toEqual("Fizz");
       }); 
    })
    describe('Buzz', ()=> {
        test("divisble 5 is buzz", ()=> {
            expect(getNum(5)).toEqual("Buzz");
        });
    })
    describe("FizzBuzz",() => {
        test("divisble 3 & 5 is BuzzFizz", ()=> {
            expect(getNum(15)).toEqual("FizzBuzz");
        } )
    })
    describe("num",() => {
        test("no div 3 & 5 is no BuzzFizz", ()=> {
            expect(getNum(11)).toEqual(11);
        } )
    }) 
})
//test 2

//test 3