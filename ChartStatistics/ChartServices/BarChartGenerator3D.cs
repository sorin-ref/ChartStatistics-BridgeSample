using System;
using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using System.Linq;

namespace ChartServices
{
    public class BarChartGenerator3D
    { 
        public RootElement3D GetRootElement(IEnumerable<int> rows, IEnumerable<int> columns, IEnumerable<IEnumerable<decimal>> values)
        {
            double x = 0, z = 0;
            return new RootElement3D
            {
                ValueRectangles = GetValueRectangles(values),
                RowHeaderRectagles = rows.Select(row => new Rectangle3D { Text = row > 0 ? row.ToString() : null, X1 = 0, X2 = 100, Y1 = 0, Y2 = 0, Z1 = z, Z2 = (z += 100) }).ToArray(),
                ColumnHeaderRectagles = columns.Select(column => new Rectangle3D { Text = column > 0 ? column.ToString() : null, X1 = x, X2 = (x += 100), Y1 = 0, Y2 = 0, Z1 = 0, Z2 = 100 }).ToArray()
            };
        }

        private IReadOnlyCollection<IReadOnlyCollection<Rectangle3D>> GetValueRectangles(IEnumerable<IEnumerable<decimal>> values)
        {
            double x = 0, z;
            return values.Select(rowValues => { x += 100; z = 100; return rowValues.Select(value => new Rectangle3D { Text = value.ToString("0.##"), X1 = x, X2 = x + 100, Y1 = 0, Y2 = (double)value, Z1 = z, Z2 = (z += 100) }).ToArray(); }).ToArray();
        }
    }

    public class RootElement3D
    {
        public IReadOnlyCollection<Rectangle3D> RowHeaderRectagles { get; set; }
        public IReadOnlyCollection<Rectangle3D> ColumnHeaderRectagles { get; set; }
        public IReadOnlyCollection<IReadOnlyCollection<Rectangle3D>> ValueRectangles { get; set; }
    }

    public class Rectangle3D : Rectangle
    {
        public double Z1 { get; set; }
        public double Z2 { get; set; }
    }
}
