import React from "react"
import { Form, FormGroup, Button } from "react-bootstrap"
import HotDrink from "../types/HotDrink"

type Props = {
  hotDrinks: HotDrink[]
  setPreparingDrink: (value: string) => void
  setAddingDrink: () => void
}

export const SelectHotDrink = ({ hotDrinks, setPreparingDrink, setAddingDrink }: Props) => {

  return(
    <>
      <div>
        <h1>What would you like to drink?</h1>
      </div>
      <div className="select-drink-form">
        <Form>
          <FormGroup>
            <Form.Control as="select" name="drinkSelect" id="drinkSelect" defaultValue={-1} onChange={(event) => setPreparingDrink(event.target.value)}>
              <option value={-1} disabled>Select drink...</option>
              {hotDrinks.map(drink => (
                <option key={drink.id}>{drink.name}</option>
              ))}
            </Form.Control>
            <Button variant="secondary" className="mt-2" onClick={setAddingDrink}>
              + Add your own
            </Button>
          </FormGroup>
        </Form>
      </div>
    </>
  )
}

export default SelectHotDrink