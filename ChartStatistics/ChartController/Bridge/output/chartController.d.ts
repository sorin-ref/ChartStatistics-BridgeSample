/// <reference path="./bridge.d.ts" />

declare module ChartController {
    export interface ChartController {
        getRows(): System.Collections.Generic.IReadOnlyCollection$1<number>;
        getColumns(): System.Collections.Generic.IReadOnlyCollection$1<number>;
        getRowRecords(): System.Collections.Generic.IReadOnlyCollection$1<ChartController.RowRecordDto>;
        getUserInterfaceElement(): ChartServices.RootElement;
        getUserInterfaceElement3D(): ChartServices.RootElement3D;
        getExtendedColumns(columns: System.Collections.Generic.IEnumerable$1<number>): System.Collections.Generic.IEnumerable$1<number>;
        getExtendedValues(rowRecords: System.Collections.Generic.IEnumerable$1<ChartController.RowRecordDto>): System.Collections.Generic.IEnumerable$1<System.Collections.Generic.IEnumerable$1<number>>;
    }
    export interface ChartControllerFunc extends Function {
        prototype: ChartController;
        new (rowsGetter: {(): System.Collections.Generic.IEnumerable$1<number>}, columnsGetter: {(): System.Collections.Generic.IEnumerable$1<number>}, rowValuesGetter: {(id: number): System.Collections.Generic.IEnumerable$1<number>}): ChartController;
    }
    var ChartController: ChartControllerFunc;

    export interface ColumnRecordDto {
        getColumn(): number;
        setColumn(value: number): void;
        getValue(): number;
        setValue(value: number): void;
    }
    export interface ColumnRecordDtoFunc extends Function {
        prototype: ColumnRecordDto;
        new (): ColumnRecordDto;
    }
    var ColumnRecordDto: ColumnRecordDtoFunc;

    export interface RowRecordDto {
        getRow(): number;
        setRow(value: number): void;
        getAverage(): number;
        setAverage(value: number): void;
        getColumnRecords(): System.Collections.Generic.IReadOnlyCollection$1<ChartController.ColumnRecordDto>;
        setColumnRecords(value: System.Collections.Generic.IReadOnlyCollection$1<ChartController.ColumnRecordDto>): void;
    }
    export interface RowRecordDtoFunc extends Function {
        prototype: RowRecordDto;
        new (): RowRecordDto;
    }
    var RowRecordDto: RowRecordDtoFunc;
}