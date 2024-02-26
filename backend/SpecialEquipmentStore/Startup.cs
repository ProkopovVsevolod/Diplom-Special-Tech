using Autofac;
using Autofac.Extensions.DependencyInjection;
using AutoMapper;
using SpecialEquipmentStore.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SpecialEquipmentStore.Controllers;
using SpecialEquipmentStore.Business;
using SpecialEquipmentStore.Repositories;
using SpecialEquipmentStore.Contracts;

namespace SpecialEquipmentStore
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; private set; }

        public ILifetimeScope AutofacContainer { get; private set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();
            services.AddOptions();
            services.AddAutoMapper(typeof(AppMappingProfile));
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "KeyTrainer Swagger UI",
                    Description = "Api �������� ����. �������",
                });
            });
        }

        public void ConfigureContainer(ContainerBuilder builder)
        {

            builder.RegisterType<UserController>()
                .AsSelf()
                .InstancePerRequest();

            builder.RegisterType<TechniqueController>()
                .AsSelf()
                .InstancePerRequest();

            builder.RegisterType<OrderController>()
                .AsSelf()
                .InstancePerRequest();

            builder.RegisterType<UserBusiness>().As<IUserBusiness>();
            builder.RegisterType<UserRepository>().As<IUserRepository>();
            builder.RegisterType<TechniqueBusiness>().As<ITechniqueBusiness>();
            builder.RegisterType<TechniqueRepository>().As<ITechniqueRepository>();
            builder.RegisterType<OrderBusiness>().As<IOrderBusiness>();
            builder.RegisterType<OrderRepository>().As<IOrderRepository>();


            builder.RegisterType<SpecialEquipmentStoreDbContext>()
                .AsSelf()
                .InstancePerLifetimeScope();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Showing API V1");
                });
            }

            app.UseRouting();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            this.AutofacContainer = app.ApplicationServices.GetAutofacRoot();

            app.UseCors(builder => builder.WithOrigins("http://localhost:3000", "https://localhost:3000",
                    "https://localhost:5001", "http://25.50.56.20:8080", "https://25.50.56.20:8080")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials());

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                   name: "default",
                   "{controller}/{action=Index}/{id?}");
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });
            });
        }
    }
}
