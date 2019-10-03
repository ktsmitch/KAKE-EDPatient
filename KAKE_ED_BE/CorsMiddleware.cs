using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace KAKE_ED_BE
{
    public class CorsMiddleware
    {
        private readonly RequestDelegate _next;
        public CorsMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public Task Invoke(HttpContext httpContext)
        {
            httpContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
            httpContext.Response.Headers.Add("Access-Control-Allow-Headers", "*");
            httpContext.Response.Headers.Add("Access-Control-Allow-Methods", "*");
            return _next(httpContext);
        }
    }
    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class CorsMiddlewareExtensions
    {
        public static IApplicationBuilder UseCorsMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<CorsMiddleware>();
        }
    }
}