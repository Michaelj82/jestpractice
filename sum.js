const { assertDeclareInterface } = require("@babel/types");
const { number } = require("yargs");

module.exports = {}

module.exports.capitalize = function capitalize(word){
    let answer = word.toUpperCase()
    return answer
};

module.exports.reverseString = function reverseString(statement){
    let answer = statement.split('').reverse().join('')
    return answer
};

const calculator = (num1, num2) => {
    let state = {
        num1: num1,
        num2: num2,
    }

    function add(){
        return num1 + num2
    }

    function subtract(){
        return num1-num2
    }

    function divide(){
        return num1/num2
    }
    
    function multiply(){
        return num1 * num2
    }


    return Object.assign(
        {state, add, subtract, divide, multiply}
    )
}
module.exports.calculator = calculator





module.exports.caesarCipher = function caesarCipher(word){
    let plain = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)); 
    let caesar = [...plain]
    caesar = caesar.concat(caesar.splice(0,1))

    let solution = word.split('')

    for (let i =0; i < solution.length; i++){
        let char = solution[i]
        let index = plain.indexOf(char)

        let correct = caesar[index]

        solution[i] = correct

    }

    solution = solution.join('')

    


    return solution

}

module.exports.analyzeArray = function analyzeArray(numberList){

    let sorted = numberList.sort(function(a, b){
        return a-b;
    })

    const sum = numberList.reduce((partialSum, a) => partialSum + a, 0)


    let solution = {
        average: (sum/(numberList.length)),
        min: sorted[0],
        max: sorted[(sorted.length - 1)],
        length: numberList.length
    }

    return solution


}


