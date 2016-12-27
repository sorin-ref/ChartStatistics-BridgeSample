/// <reference path="./bridge.d.ts" />

declare module StatisticsServices {
    export interface AverageComputer {
        getAverage(values: System.Collections.Generic.IEnumerable$1<number>): number;
    }
    export interface AverageComputerFunc extends Function {
        prototype: AverageComputer;
        new (): AverageComputer;
    }
    var AverageComputer: AverageComputerFunc;
}