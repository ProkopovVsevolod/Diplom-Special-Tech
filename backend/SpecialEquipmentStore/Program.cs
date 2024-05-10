using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using SpecialEquipmentStore.Models;
using System;
using System.Linq;
namespace SpecialEquipmentStore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
            using (SpecialEquipmentStoreDbContext db = new SpecialEquipmentStoreDbContext())
            {
                if (!db.User.Any())
                {
                    db.User.Add(
                        new User
                        {
                            Login = "admin",
                            Password = "admin",
                            Phone = "88005553535"
                        }
                    );
                    db.SaveChanges();
                }

                if (!db.TypeOfTechnique.Any())
                {
                    db.TypeOfTechnique.Add(
                        new TypeOfTechnique
                        {
                            Name = "Кран"
                        }
                    );
                    db.SaveChanges();
                }

                if (!db.Technique.Any())
                {
                    db.Technique.Add(
                        new Technique
                        {
                            Name = "ДТ-300",
                            Count = 10,
                            Price = 1000,
                            Сharacteristic = "Масса: 5т; Высота: 35м",
                            TypeOfTechniqueId = 1
                        }
                    );
                    db.SaveChanges();
                }

                if (!db.Order.Any())
                {
                    db.Order.Add(
                        new Order
                        {
                            UserId = 1,
                            Phone = "88005553535",
                            Email = "qwe@qwe.ru",
                            Address = "ул. Московское шоссе, лит.Б",
                            Date = DateTime.Now
                        }
                    );
                    db.SaveChanges();
                }

                if (!db.OrderTechnique.Any())
                {
                    db.OrderTechnique.Add(
                        new OrderTechnique
                        {
                            TechniqueId = 1,
                            OrderId = 1
                        }
                    );
                    db.SaveChanges();
                }
            }

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseServiceProviderFactory(new AutofacServiceProviderFactory())
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
