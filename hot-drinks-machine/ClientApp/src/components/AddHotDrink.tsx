import React, { useState } from "react"
import { Form, FormGroup, Button } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import StepType, { stepTypeToString } from "../enums/StepType"
import DrinkStep from "../types/DrinkStep"
import HotDrink from "../types/HotDrink";
import Step from "./Step";

type props = { 
  handleClose: () => void
}

export const AddHotDrink = ({ handleClose }: props) => {
  const [name, setName] = useState('')
  const [addingStep, setAddingStep] = useState(false)
  const [newStepName, setNewStepName] = useState('')
  const [newStepType, setNewStepType] = useState('Add')
  const [steps, setSteps] = useState<DrinkStep[]>([])

  const clearInputs = () => {
    setNewStepName('')
    setNewStepType('')
    setAddingStep(false)
  }

  const handleAddStepCancel = () => {
    clearInputs()
  }

  const handleAddStepSubmit = () => {
    const updatedSteps = [...steps]
    let convertedStepType = StepType.Add

    debugger
    switch (newStepType) {
      case "Add":
        convertedStepType = StepType.Add
        break
      case "Boil":
        convertedStepType = StepType.Boil
        break
      case "Brew":
        convertedStepType = StepType.Brew
        break
      case "Pour":
        convertedStepType = StepType.Pour
        break
      default:
        break;
    }

    const newStep: DrinkStep = {
      id: uuidv4(),
      name: newStepName,
      type: convertedStepType,
      position: updatedSteps.length + 1
    }

    updatedSteps.push(newStep)
    setSteps(updatedSteps)
    clearInputs()
  }

  const handleRemoveStep = (stepId: string) => {
    const updatedSteps = [...steps]
    const stepIndex = updatedSteps.findIndex(step => step.id === stepId)
    updatedSteps.splice(stepIndex, 1)

    updatedSteps.forEach((step, index) => step.position = index + 1)
    setSteps(updatedSteps)
  }

  const handleAddDrink = () => {
    const newDrink: HotDrink = {
      id: uuidv4(),
      name: name,
      steps: steps
    }

    localStorage.setItem(newDrink.id, JSON.stringify(newDrink))
    clearInputs()
    setSteps([])
    handleClose()
  }

  return(
    <>
      <div>
        <h1>Add new drink</h1>
      </div>
      <div className="add-drink-form">
        <Form>
          <FormGroup>
            <Form.Control max={15} placeholder="Name your drink..." value={name} onChange={(event) => setName(event.target.value)} />
            {addingStep && (
              <Form.Group className="mt-4">
                {`Step ${steps.length + 1}`}
                <Form.Control 
                  className="mb-2" 
                  placeholder="Step..." 
                  onChange={event => setNewStepName(event.target.value)} 
                  value={newStepName}
                />
                <Form.Control as="select" name="drinkTypeSelect" id="drinkTypeSelect" onChange={(event) => setNewStepType(event.target.value)} value={newStepType}>
                  {[StepType.Add, StepType.Boil, StepType.Brew, StepType.Pour].map(type => (
                    <option key={type}>{stepTypeToString(type)}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
            {addingStep && <Button variant="link" disabled={!newStepName} onClick={handleAddStepSubmit}>Save step</Button>}
            {addingStep && <Button className="cancel-btn" variant="link" onClick={handleAddStepCancel}>Cancel</Button>}
            {!addingStep && <Button variant="link" onClick={() => setAddingStep(true)}>+ Add step</Button>}
            <br />
            <Button variant="secondary" className="mt-2" disabled={!name || addingStep || steps.length < 2} onClick={handleAddDrink}>
              Create
            </Button>
            {!addingStep && <Button className="cancel-btn" variant="link" onClick={handleClose}>Cancel</Button>}
          </FormGroup>
        </Form>
      </div>
      <div>
        {steps.length > 0 && (
          <div className="added-steps-panel">
            <h2 className="added-steps-header">Added steps</h2>
            <hr className="drink-rule" />
            {steps.map(step => (
              <Step step={step} handleRemove={handleRemoveStep}/>
            ))}
          </div>
          )
        }
      </div>
    </>
  )
}

export default AddHotDrink