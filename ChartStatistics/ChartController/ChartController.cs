using System;
using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using System.Linq;
using StatisticsServices;
using ChartServices;

namespace ChartController
{
    public class ChartController
    {
        private IReadOnlyCollection<int> rows, columns;
        private IReadOnlyCollection<RowRecordDto> rowRecords;

        public ChartController(FacetGetter rowsGetter, FacetGetter columnsGetter, ValueGetter rowValuesGetter)
        {
            rows = rowsGetter().ToArray();
            columns = columnsGetter().ToArray();
            var averageComputer = new AverageComputer();
            rowRecords = (
                from r in rows
                let rowValues = rowValuesGetter(r)
                select new RowRecordDto { Row = r, Average = averageComputer.GetAverage(rowValues), ColumnRecords = columns.Select(c => new ColumnRecordDto { Column = c, Value = rowValues.Skip(c).First() }).ToArray() }).ToArray();
        }

        public IReadOnlyCollection<int> Rows => rows;
        public IReadOnlyCollection<int> Columns => columns;
        public IReadOnlyCollection<RowRecordDto> RowRecords => rowRecords;

        public RootElement GetUserInterfaceElement()
        {
            var barChartGenerator = new BarChartGenerator();
            return barChartGenerator.GetRootElement(rows, GetExtendedColumns(columns), GetExtendedValues(rowRecords));
        }

        public RootElement3D GetUserInterfaceElement3D()
        {
            var barChartGenerator3D = new BarChartGenerator3D();
            return barChartGenerator3D.GetRootElement(rows, GetExtendedColumns(columns), GetExtendedValues(rowRecords));
        }

        private IEnumerable<int> GetExtendedColumns(IEnumerable<int> columns) => new[] { 0 }.Union(columns);
        private IEnumerable<IEnumerable<decimal>> GetExtendedValues(IEnumerable<RowRecordDto> rowRecords) => rowRecords.Select(rr => new[] { rr.Average }.Union(rr.ColumnRecords.Select(cr => cr.Value)));
    }

    public delegate IEnumerable<int> FacetGetter();
    public delegate IEnumerable<decimal> ValueGetter(int id);

    public class RowRecordDto
    {
        public int Row { get; set; }
        public decimal Average { get; set; }
        public IReadOnlyCollection<ColumnRecordDto> ColumnRecords { get; set; }
    }
    public class ColumnRecordDto
    {
        public int Column { get; set; }
        public decimal Value { get; set; }
    }
}
