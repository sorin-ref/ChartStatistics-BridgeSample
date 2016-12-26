using System;
using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using System.Linq;

namespace StatisticsServices
{
    public class Prospecter
    {
        public IEnumerable<decimal> GetValuesWithProspectionApplied(IEnumerable<decimal> values, int prospectedValueCount)
        {
            if (values == null)
                yield break;
            foreach (var value in values)
                yield return value;
            var currentValues = new List<decimal>(values.Reverse());
            if (currentValues.Count <= 0)
                yield break;
            for (var i = 0; i < prospectedValueCount; i++)
            {
                var prospectedValue = currentValues.Count >= 2 ? (currentValues.First() + currentValues.Skip(1).First()) / 2 : currentValues.First();
                currentValues.Insert(0, prospectedValue);
                yield return prospectedValue;
            }
        }
    }
}
