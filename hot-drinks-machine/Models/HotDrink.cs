using System;
using System.Collections.Generic;
using hot_drinks_machine.Models;

namespace hot_drinks_machine
{
    public class HotDrink
    {
        public Guid id { get; set; }
        public string name { get; set; }
        public IEnumerable<DrinkStep> steps { get; set; }
    }
}
