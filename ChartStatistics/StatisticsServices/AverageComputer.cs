using System;
using Bridge;
using Bridge.Html5;
using System.Linq;
using System.Collections.Generic;

namespace StatisticsServices
{
    public class AverageComputer
    {
        public decimal GetAverage(IEnumerable<decimal> values)
        {
            var valueArray = values.ToArray();
            return valueArray.Sum() / valueArray.Length;
        }
    }
}
