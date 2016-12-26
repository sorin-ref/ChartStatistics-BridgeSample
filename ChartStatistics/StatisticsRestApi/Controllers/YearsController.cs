using StatisticsDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StatisticsRestApi.Controllers
{
    public class YearsController : ApiController
    {
        StatisticsDataProvider dataProvider = new StatisticsDataProvider();

        public IReadOnlyCollection<int> GetYears()
        {
            return dataProvider.GetYears();
        }
    }
}
