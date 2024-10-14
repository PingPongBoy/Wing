using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Mvc;
using Wing.Model;
using Wing.Result;
using Wing.ServiceCenter.Client.Service;
using Wing.ServiceProvider;
using Wing.ServiceProvider.Dto;

namespace Wing.ServiceCenter.Client
{
    public class ConfigViewProvider : IConfigViewProvider
    {
        private readonly ConfigService _configService;

        public ConfigViewProvider(ConfigService configService)
        {
            _configService = configService;
        }

        public async Task<bool> Delete(string key)
        {
            return await _configService.Delete(key);
        }

        public async Task<Dictionary<string, string>> Get(string key)
        {
            return await _configService.Get(key);
        }

        public async Task<PageResult<Dictionary<string, string>>> List([FromQuery] PageModel<string> dto)
        {
            return await _configService.List(dto);
        }

        public async Task<bool> Save(List<ConfigDto> configDtos)
        {
            return await _configService.Save(configDtos);
        }
    }
}
