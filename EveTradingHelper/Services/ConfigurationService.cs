
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace EveTradingHelper.Services
{
    public class ConfigurationService
    {
        public IConfiguration Configuration { get; private set; }
        public IHostingEnvironment Environment { get; private set; }

        public ConfigurationService(IHostingEnvironment environment)
        {
            this.Environment = environment;

            var configFileName = System.IO.Path.Combine(environment.ContentRootPath, "appsettings.json");
            var config = new ConfigurationBuilder()
                            .AddJsonFile(configFileName, true)
                            .Build();

            this.Configuration = config;
        }

    }
}
