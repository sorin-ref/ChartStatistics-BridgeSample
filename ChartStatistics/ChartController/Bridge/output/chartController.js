/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2016
 * @compiler Bridge.NET 15.6.0
 */
Bridge.assembly("ChartController", function ($asm, globals) {
    "use strict";

    Bridge.define("ChartController.ChartController", {
        rows: null,
        columns: null,
        rowRecords: null,
        ctor: function (rowsGetter, columnsGetter, rowValuesGetter) {
            this.$initialize();
            this.rows = System.Linq.Enumerable.from(rowsGetter()).toArray();
            this.columns = System.Linq.Enumerable.from(columnsGetter()).toArray();
            var averageComputer = new StatisticsServices.AverageComputer();
            this.rowRecords = (System.Linq.Enumerable.from(this.rows).select(function (r) {
                    return new $asm.$AnonymousType$1(r, rowValuesGetter(r));
                }).select(Bridge.fn.bind(this, function (x0) {
                return Bridge.merge(new ChartController.RowRecordDto(), {
                    setRow: x0.r,
                    setAverage: averageComputer.getAverage(x0.rowValues),
                    setColumnRecords: System.Linq.Enumerable.from(this.columns).select(function (c) {
                            return Bridge.merge(new ChartController.ColumnRecordDto(), {
                                setColumn: c,
                                setValue: System.Linq.Enumerable.from(x0.rowValues).skip(c).first()
                            } );
                        }).toArray()
                } );
            }))).toArray();
        },
        getRows: function () {
            return this.rows;
        },
        getColumns: function () {
            return this.columns;
        },
        getRowRecords: function () {
            return this.rowRecords;
        },
        getUserInterfaceElement: function () {
            var barChartGenerator = new ChartServices.BarChartGenerator();
            return barChartGenerator.getRootElement(this.rows, this.getExtendedColumns(this.columns), this.getExtendedValues(this.rowRecords));
        },
        getUserInterfaceElement3D: function () {
            var barChartGenerator3D = new ChartServices.BarChartGenerator3D();
            return barChartGenerator3D.getRootElement(this.rows, this.getExtendedColumns(this.columns), this.getExtendedValues(this.rowRecords));
        },
        getExtendedColumns: function (columns) {
            return System.Linq.Enumerable.from([0]).union(columns);
        },
        getExtendedValues: function (rowRecords) {
            return System.Linq.Enumerable.from(rowRecords).select($asm.$.ChartController.ChartController.f2);
        }
    });

    Bridge.define("$AnonymousType$1", $asm, {
        $kind: "anonymous",
        ctor: function (r, rowValues) {
            this.r = r;
            this.rowValues = rowValues;
        },
        getr : function () {
            return this.r;
        },
        getrowValues : function () {
            return this.rowValues;
        },
        equals: function (o) {
            if (!Bridge.is(o, $asm.$AnonymousType$1)) {
                return false;
            }
            return Bridge.equals(this.r, o.r) && Bridge.equals(this.rowValues, o.rowValues);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7550196186, this.r, this.rowValues]);
            return h;
        },
        toJSON: function () {
            return {
                r : this.r,
                rowValues : this.rowValues
            };
        }
    });

    Bridge.ns("ChartController.ChartController", $asm.$);

    Bridge.apply($asm.$.ChartController.ChartController, {
        f1: function (cr) {
            return cr.getValue();
        },
        f2: function (rr) {
            return System.Linq.Enumerable.from([rr.getAverage()]).union(System.Linq.Enumerable.from(rr.getColumnRecords()).select($asm.$.ChartController.ChartController.f1));
        }
    });

    Bridge.define("ChartController.ColumnRecordDto", {
        config: {
            properties: {
                Column: 0,
                Value: System.Decimal(0.0)
            }
        }
    });

    Bridge.define("ChartController.RowRecordDto", {
        config: {
            properties: {
                Row: 0,
                Average: System.Decimal(0.0),
                ColumnRecords: null
            }
        }
    });
});
