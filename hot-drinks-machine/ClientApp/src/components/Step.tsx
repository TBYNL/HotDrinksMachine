import React from 'react';
import { Button } from 'react-bootstrap';
import { stepTypeToString } from '../enums/StepType';
import DrinkStep from '../types/DrinkStep';

type props = {
  step: DrinkStep
  handleRemove: (stepId: string) => void
}

const Step = ({ step, handleRemove }: props) => {
  return (
    <div className="added-step" key={step.id}>
      <h4><u>Step {step.position}</u></h4>
      {`Text: ${step.name}`}
      <br />
      {`Type: ${stepTypeToString(step.type)}`}
      <Button 
        className="remove-btn" 
        variant="link"
        onClick={() => handleRemove(step.id)}
      >
          X
      </Button>
    </div>
  );
};

export default Step;
