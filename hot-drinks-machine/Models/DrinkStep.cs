using System;
namespace hot_drinks_machine.Models
{
    public class DrinkStep
    {
        public Guid id { get; set; }
        public string name { get; set; }
        public StepType type { get; set; }
        public int position { get; set; }
    }
}
