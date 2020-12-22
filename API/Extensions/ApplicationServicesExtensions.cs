using System.Linq;
using API.Errors;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions
    {

        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

            services.Configure<ApiBehaviorOptions>(c =>
           {
               c.InvalidModelStateResponseFactory = actionContext =>
               {
                   var errors = actionContext.ModelState
                     .Where(e => e.Value.Errors.Count > 0)
                     .SelectMany(e => e.Value.Errors)
                     .Select(e => e.ErrorMessage).ToArray();

                   var response = new ApiValidationErrorResponse
                   {
                       Errors = errors

                   };

                   return new BadRequestObjectResult(response);
               };
           });

            return services;

        }
    }
}