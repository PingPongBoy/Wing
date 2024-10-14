using Mapster;
using Wing.Model;
using Wing.Result;
using Wing.ServiceCenter.Model;
using Wing.ServiceProvider.Dto;

namespace Wing.ServiceCenter.Service
{
    public class ConfigService
    {
        private readonly IFreeSql<WingDbFlag> _fsql;

        public ConfigService(IFreeSql<WingDbFlag> fsql)
        {
            _fsql = fsql;
        }

        public async Task<Dictionary<string, string>> Get(string key)
        {
            return await _fsql.Select<Config>()
                .Where(x => x.Key == key)
                .ToDictionaryAsync(x => x.Key, x => x.Value);
        }

        public async Task<bool> Delete(string key)
        {
            return (await _fsql.Delete<Config>()
                .Where(x => x.Key == key)
                .ExecuteAffrowsAsync()) > 0;
        }

        public async Task<PageResult<Dictionary<string, string>>> List(PageModel<string> dto)
        {
            var result = await _fsql.Select<Config>()
                   .WhereIf(!string.IsNullOrWhiteSpace(dto.Data), u => u.Key == dto.Data)
                   .Count(out var total)
                   .Page(dto.PageIndex, dto.PageSize)
                   .ToDictionaryAsync(x => x.Key, x => x.Value);
            return new PageResult<Dictionary<string, string>>
            {
                TotalCount = total,
                Items = result
            };
        }

        public async Task<bool> Save(List<ConfigDto> configDtos)
        {
            foreach (var configDto in configDtos)
            {
                var config = configDto.Adapt<Config>();
                var exists = await _fsql.Select<Config>().AnyAsync(x => x.Key == config.Key);
                if (exists)
                {
                    await _fsql.Update<Config>()
                        .Set(x => x.Value, config.Value)
                        .Set(x => x.Version + 1)
                        .Where(x => x.Key == config.Key)
                        .ExecuteAffrowsAsync();
                    continue;
                }

                config.Version = 1;
                await _fsql.Insert(config).ExecuteAffrowsAsync();
            }

            return true;
        }
    }
}
