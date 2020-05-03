import Operator from "./Operator";

export class Sum implements Operator {
    run (a: number, b: number): number {
        return a + b
    }
}

export class Subtract implements Operator {
    run (a: number, b: number): number {
        return a - b
    }
}
