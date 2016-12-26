using StatisticsDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StatisticsRestApi.Controllers
{
    public class MonthsController : ApiController
    {
        StatisticsDataProvider dataProvider = new StatisticsDataProvider();

        public IReadOnlyCollection<int> GetMonths()
        {
            return dataProvider.GetMonths();
        }
    }
}
