enum StepType {
  Add = 1,
  Boil = 2,
  Brew = 3,
  Pour = 4
}

export const stepTypeToString = (stepType: StepType) => {
  switch (stepType) {
    case StepType.Add:
      return "Add"
    case StepType.Boil:
      return "Boil"
    case StepType.Brew:
      return "Brew"
    case StepType.Pour:
      return "Pour"
    default:
      break;
  }
}

export default StepType