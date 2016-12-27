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
});
