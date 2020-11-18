using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hot_drinks_machine.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace hot_drinks_machine.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HotDrinksController : ControllerBase
    {
        private readonly ILogger<HotDrinksController> _logger;

        public HotDrinksController(ILogger<HotDrinksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<HotDrink> Get()
        {
            List<HotDrink> hotDrinks = new List<HotDrink>()
            {
                new HotDrink
                {
                    id = Guid.NewGuid(),
                    name = "Lemon Tea",
                    steps = new List<DrinkStep>()
                    {
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Boil some water",
                            type = StepType.Boil,
                            position = 1
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Steep the water in the tea",
                            type = StepType.Brew,
                            position = 2
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Pour tea in the cup",
                            type = StepType.Pour,
                            position = 3
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Add lemon",
                            type = StepType.Add,
                            position = 4
                        }
                    }
                },
                new HotDrink
                {
                    id = Guid.NewGuid(),
                    name = "Coffee",
                    steps = new List<DrinkStep>()
                    {
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Boil some water",
                            type = StepType.Boil,
                            position = 1
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Brew the coffee grounds",
                            type = StepType.Brew,
                            position = 2
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Pour coffee in the cup",
                            type = StepType.Pour,
                            position = 3
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Add sugar and milk",
                            type = StepType.Add,
                            position = 4
                        }
                    }
                },
                new HotDrink
                {
                    id = Guid.NewGuid(),
                    name = "Chocolate",
                    steps = new List<DrinkStep>()
                    {
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Boil some water",
                            type = StepType.Boil,
                            position = 1
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Add drinking chocolate in the cup",
                            type = StepType.Brew,
                            position = 2
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Pour tea in the cup",
                            type = StepType.Pour,
                            position = 3
                        },
                        new DrinkStep
                        {
                            id = Guid.NewGuid(),
                            name = "Add lemon",
                            type = StepType.Add,
                            position = 4
                        }
                    }
                }
            };

            return hotDrinks;
        }
    }
}
