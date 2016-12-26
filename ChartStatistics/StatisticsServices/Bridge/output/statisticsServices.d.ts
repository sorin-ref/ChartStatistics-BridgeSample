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

    export interface Prospecter {
        getValuesWithProspectionApplied(values: System.Collections.Generic.IEnumerable$1<number>, prospectedValueCount: number): System.Collections.Generic.IEnumerable$1<number>;
    }
    export interface ProspecterFunc extends Function {
        prototype: Prospecter;
        new (): Prospecter;
    }
    var Prospecter: ProspecterFunc;
}