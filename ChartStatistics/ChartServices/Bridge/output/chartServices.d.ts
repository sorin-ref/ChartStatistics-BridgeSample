/// <reference path="./bridge.d.ts" />

declare module ChartServices {
    export interface BarChartGenerator {
        getRootElement(rows: System.Collections.Generic.IEnumerable$1<number>, columns: System.Collections.Generic.IEnumerable$1<number>, values: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.IEnumerable$1<number>>): ChartServices.RootElement;
        getColumnElements(columns: System.Collections.Generic.IEnumerable$1<number>, values: System.Collections.Generic.IEnumerable$1<number>, y: number): System.Collections.Generic.IReadOnlyCollection$1<ChartServices.ColumnElement>;
    }
    export interface BarChartGeneratorFunc extends Function {
        prototype: BarChartGenerator;
        new (): BarChartGenerator;
    }
    var BarChartGenerator: BarChartGeneratorFunc;

    export interface BarChartGenerator3D {
        getRootElement(rows: System.Collections.Generic.IEnumerable$1<number>, columns: System.Collections.Generic.IEnumerable$1<number>, values: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.IEnumerable$1<number>>): ChartServices.RootElement3D;
        getValueRectangles(values: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.IEnumerable$1<number>>): System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.IReadOnlyCollection$1<ChartServices.Rectangle3D>>;
    }
    export interface BarChartGenerator3DFunc extends Function {
        prototype: BarChartGenerator3D;
        new (): BarChartGenerator3D;
    }
    var BarChartGenerator3D: BarChartGenerator3DFunc;

    export interface ColumnElement {
        getHeaderRectangle(): ChartServices.Rectangle;
        setHeaderRectangle(value: ChartServices.Rectangle): void;
        getValueRectangle(): ChartServices.Rectangle;
        setValueRectangle(value: ChartServices.Rectangle): void;
    }
    export interface ColumnElementFunc extends Function {
        prototype: ColumnElement;
        new (): ColumnElement;
    }
    var ColumnElement: ColumnElementFunc;

    export interface Rectangle {
        getText(): string;
        setText(value: string): void;
        getX1(): number;
        setX1(value: number): void;
        getX2(): number;
        setX2(value: number): void;
        getY1(): number;
        setY1(value: number): void;
        getY2(): number;
        setY2(value: number): void;
    }
    export interface RectangleFunc extends Function {
        prototype: Rectangle;
        new (): Rectangle;
    }
    var Rectangle: RectangleFunc;

    export interface RootElement {
        getRowElements(): System.Collections.Generic.IReadOnlyCollection$1<ChartServices.RowElement>;
        setRowElements(value: System.Collections.Generic.IReadOnlyCollection$1<ChartServices.RowElement>): void;
    }
    export interface RootElementFunc extends Function {
        prototype: RootElement;
        new (): RootElement;
    }
    var RootElement: RootElementFunc;

    export interface RootElement3D {
        getRowHeaderRectagles(): System.Collections.Generic.IReadOnlyCollection$1<ChartServices.Rectangle3D>;
        setRowHeaderRectagles(value: System.Collections.Generic.IReadOnlyCollection$1<ChartServices.Rectangle3D>): void;
        getColumnHeaderRectagles(): System.Collections.Generic.IReadOnlyCollection$1<ChartServices.Rectangle3D>;
        setColumnHeaderRectagles(value: System.Collections.Generic.IReadOnlyCollection$1<ChartServices.Rectangle3D>): void;
        getValueRectangles(): System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.IReadOnlyCollection$1<ChartServices.Rectangle3D>>;
        setValueRectangles(value: System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.IReadOnlyCollection$1<ChartServices.Rectangle3D>>): void;
    }
    export interface RootElement3DFunc extends Function {
        prototype: RootElement3D;
        new (): RootElement3D;
    }
    var RootElement3D: RootElement3DFunc;

    export interface RowElement {
        getHeaderRectagle(): ChartServices.Rectangle;
        setHeaderRectagle(value: ChartServices.Rectangle): void;
        getColumnElements(): System.Collections.Generic.IReadOnlyCollection$1<ChartServices.ColumnElement>;
        setColumnElements(value: System.Collections.Generic.IReadOnlyCollection$1<ChartServices.ColumnElement>): void;
    }
    export interface RowElementFunc extends Function {
        prototype: RowElement;
        new (): RowElement;
    }
    var RowElement: RowElementFunc;

    export interface Rectangle3D extends ChartServices.Rectangle {
        getZ1(): number;
        setZ1(value: number): void;
        getZ2(): number;
        setZ2(value: number): void;
    }
    export interface Rectangle3DFunc extends Function {
        prototype: Rectangle3D;
        new (): Rectangle3D;
    }
    var Rectangle3D: Rectangle3DFunc;
}