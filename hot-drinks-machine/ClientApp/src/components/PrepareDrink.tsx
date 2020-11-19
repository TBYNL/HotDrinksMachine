import React from 'react';
import DrinkStep from '../types/DrinkStep';
import ellipsisImg from '../img/ellipsis.gif'
import addImg from '../img/add.gif'
import boilImg from '../img/kettle.gif'
import brewImg from '../img/brew.gif'
import pourImg from '../img/pour.gif'
import StepType from '../enums/StepType';

type props = {
  name: string
  selectedStep: DrinkStep | undefined
}

const PrepareDrink = ({ name, selectedStep }: props) => {

  const renderStepImage = () => {
    if(selectedStep) {
      switch (selectedStep.type) {
        case StepType.Add:
          return <img src={addImg} alt="kettle" className="loading-image" />
        case StepType.Boil:
          return <img src={boilImg} alt="kettle" className="loading-image" />
        case StepType.Brew:
          return <img src={brewImg} alt="brew" className="loading-image" />
        case StepType.Pour:
          return <img src={pourImg} alt="brew" className="loading-image" />
  
        default:
          return null
      }
    }
  }

  return (
    <>
      <h1>Preparing {name}<img src={ellipsisImg} id="ellipsis-img" alt="ellipsis" /></h1>
      <div className="text-center">
        <h2 className="step">{renderStepImage()}{selectedStep?.name}</h2>
      </div>
    </>
  );
};

export default PrepareDrink;
