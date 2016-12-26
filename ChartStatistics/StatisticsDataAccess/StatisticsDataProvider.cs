using DataAccessPatterns.Contracts;
using DataAccessPatterns.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StatisticsDataAccess
{
    public class StatisticsDataProvider
    {
        public IReadOnlyCollection<int> GetYears()
        {
            using (var dataAccessService = new DataAccessService<StatisticsDatabaseEntities>())
            {
                IUnitOfWork unitOfWork = dataAccessService.GetUnitOfWork();
                IRepository<MonthlyRecord> monthlyRecordRepository = dataAccessService.GetRepository<MonthlyRecord>();
                return monthlyRecordRepository.Get().Select(mr => mr.Year).OrderBy(y => y).Distinct().ToArray();
            }
        }

        public IReadOnlyCollection<int> GetMonths()
        {
            using (var dataAccessService = new DataAccessService<StatisticsDatabaseEntities>())
            {
                IUnitOfWork unitOfWork = dataAccessService.GetUnitOfWork();
                IRepository<MonthlyRecord> monthlyRecordRepository = dataAccessService.GetRepository<MonthlyRecord>();
                return monthlyRecordRepository.Get().Select(mr => mr.Month).OrderBy(m => m).Distinct().ToArray();
            }
        }

        public IReadOnlyCollection<MonthlyRecordDto> GetMonthlyRecords(int year)
        {
            using (var dataAccessService = new DataAccessService<StatisticsDatabaseEntities>())
            {
                IUnitOfWork unitOfWork = dataAccessService.GetUnitOfWork();
                IRepository<MonthlyRecord> monthlyRecordRepository = dataAccessService.GetRepository<MonthlyRecord>();
                return monthlyRecordRepository.Get(mrs => mrs.Where(mr => mr.Year == year)).OrderBy(mr => mr.Month).Select(mr => new MonthlyRecordDto { Month = mr.Month, Value = mr.Value }).ToArray();
            }
        }
    }

    public class MonthlyRecordDto
    {
        public int Month { get; set; }
        public decimal Value { get; set; }
    }
}
