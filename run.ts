import Calculator from "./Calculator";
import {Subtract, Sum} from "./Operations";

const calculator = new Calculator();

calculator
    .register('+', new Sum())
    .register('-', new Subtract());

const [,,operatorName, num1, num2] = process.argv;

const result = calculator.calculate(operatorName, parseInt(num1), parseInt(num2));
console.log(result);
