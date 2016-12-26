using StatisticsDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StatisticsRestApi.Controllers
{
    public class MonthlyRecordsController : ApiController
    {
        StatisticsDataProvider dataProvider = new StatisticsDataProvider();

        public IReadOnlyCollection<MonthlyRecordDto> GetMonthlyRecords(int id)
        {
            var year = id;
            return dataProvider.GetMonthlyRecords(year);
        }
    }
}
