/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2016
 * @compiler Bridge.NET 15.6.0
 */
Bridge.assembly("StatisticsServices", function ($asm, globals) {
    "use strict";

    Bridge.define("StatisticsServices.AverageComputer", {
        getAverage: function (values) {
            var valueArray = System.Linq.Enumerable.from(values).toArray();
            return System.Linq.Enumerable.from(valueArray).sum(System.Decimal.Zero).div(System.Decimal(valueArray.length));
        }
    });

    Bridge.define("StatisticsServices.Prospecter", {
        getValuesWithProspectionApplied: function (values, prospectedValueCount) {
            var $t;
            var $yield = [];
            if (values == null) {
                return System.Array.toEnumerable($yield);
            }
            $t = Bridge.getEnumerator(values, System.Decimal);
            while ($t.moveNext()) {
                var value = $t.getCurrent();
                $yield.push(value);
            }
            var currentValues = new (System.Collections.Generic.List$1(System.Decimal))(System.Linq.Enumerable.from(values).reverse());
            if (currentValues.getCount() <= 0) {
                return System.Array.toEnumerable($yield);
            }
            for (var i = 0; i < prospectedValueCount; i = (i + 1) | 0) {
                var prospectedValue = currentValues.getCount() >= 2 ? (System.Linq.Enumerable.from(currentValues).first().add(System.Linq.Enumerable.from(currentValues).skip(1).first())).div(System.Decimal(2)) : System.Linq.Enumerable.from(currentValues).first();
                currentValues.insert(0, prospectedValue);
                $yield.push(prospectedValue);
            }
            return System.Array.toEnumerable($yield);
        }
    });
});
