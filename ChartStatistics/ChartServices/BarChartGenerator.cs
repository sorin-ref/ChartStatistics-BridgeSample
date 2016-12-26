using System;
using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using System.Linq;

namespace ChartServices
{
    public class BarChartGenerator
    {
        public RootElement GetRootElement(IEnumerable<int> rows, IEnumerable<int> columns, IEnumerable<IEnumerable<decimal>> values)
        {
            double y = 0;
            return new RootElement
            {
                RowElements = rows.Select(row => new RowElement
                {
                    ColumnElements = GetColumnElements(columns, values.Skip(row).First(), y),
                    HeaderRectagle = new Rectangle { Text =  row > 0 ? row.ToString() : null, X1 = 0, X2 = 100, Y1 = y, Y2 = (y += 100) },
                }).ToArray()
            };
        }

        private IReadOnlyCollection<ColumnElement> GetColumnElements(IEnumerable<int> columns, IEnumerable<decimal> values, double y)
        {
            double x = 100;
            return columns.Select(column => new ColumnElement
            {
                ValueRectangle = new Rectangle { Text = values.Skip(column).First().ToString("0.00"), X1 = x, X2 = x + 100, Y1 = y, Y2 = y + 100 },
                HeaderRectangle = new Rectangle { Text = column > 0 ? column.ToString() : null, X1 = x, X2 = (x += 100), Y1 = y, Y2 = y + 100 }
            }).ToArray();
        }
    }

    public class RootElement
    {
        public IReadOnlyCollection<RowElement> RowElements { get; set; }
    }

    public class RowElement
    {
        public Rectangle HeaderRectagle { get; set; }
        public IReadOnlyCollection<ColumnElement> ColumnElements { get; set; }
    }

    public class ColumnElement
    {
        public Rectangle HeaderRectangle { get; set; }
        public Rectangle ValueRectangle { get; set; }
    }

    public class Rectangle
    {
        public string Text { get; set; }
        public double X1 { get; set; }
        public double X2 { get; set; }
        public double Y1 { get; set; }
        public double Y2 { get; set; }
    }
}
