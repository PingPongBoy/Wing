﻿using Wing.Model;
using Wing.Result;
using Wing.ServiceProvider.Dto;

namespace Wing.ServiceCenter.Service
{
    public class RegisterService
    {
        private readonly IFreeSql<WingDbFlag> _fsql;

        public RegisterService(IFreeSql<WingDbFlag> fsql)
        {
            _fsql = fsql;
        }

        public async Task<int> Add(Entity.Service service)
        {
            var exists = await _fsql.Select<Entity.Service>().AnyAsync(x => x.Host == service.Host && x.Port == service.Port);
            if (exists)
            {
                await _fsql.Delete<Entity.Service>()
                    .Where(x => x.Host == service.Host && x.Port == service.Port)
                    .ExecuteAffrowsAsync();
            }

            return await _fsql.Insert(service).ExecuteAffrowsAsync();
        }

        public async Task<PageResult<List<ServiceDetailDto>>> Detail(PageModel<ServiceSearchDto> dto)
        {
            var result = await _fsql.Select<Entity.Service>()
                    .WhereIf(dto.Data.Status != null, u => u.Status == dto.Data.Status)
                    .WhereIf(!string.IsNullOrWhiteSpace(dto.Data.Name), u => u.Name.Contains(dto.Data.Name))
                    .WhereIf(dto.Data.ServiceType != null, u => u.ServiceType == dto.Data.ServiceType)
                    .WhereIf(dto.Data.LoadBalancer != null, u => u.LoadBalancer == dto.Data.LoadBalancer)
                    .Count(out var total)
                    .Page(dto.PageIndex, dto.PageSize)
                    .ToListAsync<ServiceDetailDto>();
            if (result != null)
            {
                result.ForEach(x => x.Address = $"{x.Scheme}://{x.Host}:{x.Port}");
            }

            return new PageResult<List<ServiceDetailDto>>
            {
                TotalCount = total,
                Items = result
            };
        }

        public async Task<PageResult<List<ServiceDto>>> List(PageModel<string> dto)
        {
            var result = await _fsql.Select<Entity.Service>()
                    .WhereIf(!string.IsNullOrWhiteSpace(dto.Data), u => u.Name.Contains(dto.Data))
                    .GroupBy(x => new { x.Name })
                    .Count(out var total)
                    .Page(dto.PageIndex, dto.PageSize)
                    .ToListAsync(x => new ServiceDto
                    {
                        Name = x.Key.Name,
                        Total = x.Count(),
                        CriticalTotal = x.Count(x.Value.Status == ServiceProvider.HealthStatus.Critical),
                        HealthyTotal = x.Count(x.Value.Status == ServiceProvider.HealthStatus.Healthy),
                        MaintenanceTotal = x.Count(x.Value.Status == ServiceProvider.HealthStatus.Maintenance),
                        WarningTotal = x.Count(x.Value.Status == ServiceProvider.HealthStatus.Warning)
                    });
            if (result != null && result.Count > 0)
            {
                foreach (var s in result)
                {
                    s.CriticalLv = Math.Round(s.CriticalTotal * 100.0 / s.Total, 2);
                    s.HealthyLv = Math.Round(s.HealthyTotal * 100.0 / s.Total, 2);
                    s.MaintenanceLv = Math.Round(s.MaintenanceTotal * 100.0 / s.Total, 2);
                    s.WarningLv = Math.Round(s.WarningTotal * 100.0 / s.Total, 2);
                }
            }

            return new PageResult<List<ServiceDto>>
            {
                TotalCount = total,
                Items = result
            };
        }
    }
}
