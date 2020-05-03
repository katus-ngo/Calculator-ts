import Operator from "./Operator";

type Calculation = {
    [operatorName: string]: Operator,
}
export default class Calculator {
    private calculation: Calculation = {};

    register (operatorName: string, operator: Operator): Calculator {
        this.calculation[operatorName] = operator;
        return this
    }

    calculate (operatorName: string, a: number, b: number): number {
        if (!this.calculation[operatorName]) {
            throw new Error(`Operator ${ operatorName } not support!`)
        }
        return this.calculation[operatorName].run(a, b)
    }
}
