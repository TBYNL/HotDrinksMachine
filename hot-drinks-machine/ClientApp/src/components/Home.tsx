import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import '../styles/style.css'
import SelectHotDrink from './SelectHotDrink'
import AddHotDrink from './AddHotDrink'
import HotDrink from '../types/HotDrink'
import PrepareDrink from './PrepareDrink'
import DrinkStep from '../types/DrinkStep'
import Enjoy from './Enjoy'

export const Home = () => {
  const [showMainContent, setShowMainContent] = useState(false)
  const [hotDrinks, setHotDrinks] = useState<HotDrink[]>([])
  const [drinkBeingPrepared, setDrinkBeingPrepared] = useState<HotDrink>()
  const [drinkFinished, setDrinkFinished] = useState(false)
  const [addingDrink, setAddingDrink] = useState(false)
  const [selectedStep, setSelectedStep] = useState<DrinkStep>()

  setTimeout(() => {
    setShowMainContent(true)
  }, 3000);

  const getHotDrinks = async () => {
    const userAddedHotDrinks = Object.entries(localStorage).map(item => localStorage.getItem(item[0]))
    const convertedHotDrinks: HotDrink[] = userAddedHotDrinks.map(hotDrink => hotDrink && JSON.parse(hotDrink))

    const response = await fetch('hotDrinks')
    const defaultHotDrinks: HotDrink[] = await response.json()

    setHotDrinks(convertedHotDrinks.concat(defaultHotDrinks))
  }

  const setHotDrink = (selectedDrinkName: string) => {
    setDrinkBeingPrepared(hotDrinks.find(drink => drink.name === selectedDrinkName))
  }

  const finishedMakingDrink = () => {
    setTimeout(() => {
      setDrinkFinished(true)
      setSelectedStep(undefined)
    }, 3000)
  }

  const renderContent = () => {
    if (drinkBeingPrepared) {
      return (
        <Slide>
          {!drinkFinished ? (
            <PrepareDrink name={drinkBeingPrepared.name} selectedStep={selectedStep} />
          ) : (
            <Enjoy goHome={() => { 
              setDrinkBeingPrepared(undefined)  
              setDrinkFinished(false)
            }}/>
          )}
        </Slide>
      )
    }

    if (addingDrink) {
      return(
        <Slide>
          <AddHotDrink 
            handleClose={() => setAddingDrink(false)}
          />
        </Slide>
      )
    }

    return (
      !showMainContent ? (
        <Fade duration={2000}>
          <div>
            <h1>Welcome.</h1>
          </div>
        </Fade>
        ) : (
          <Fade delay={3000} duration={2000}>
            <SelectHotDrink 
              hotDrinks={hotDrinks} 
              setPreparingDrink={setHotDrink}
              setAddingDrink={() => setAddingDrink(true)}
            />
          </Fade>
      )
    )
  }

  useEffect(() => {
    getHotDrinks()
  }, []);

  useEffect(() => {
    let timeout = 3000
    drinkBeingPrepared?.steps.forEach((step, index) => {
      timeout = timeout + 1500
      setTimeout(() => {
        setSelectedStep(step)

        if(index === drinkBeingPrepared.steps.length--) {
          finishedMakingDrink()
        }
      }, timeout)
    })
  }, [drinkBeingPrepared])

  useEffect(() => {
    setShowMainContent(false)
    getHotDrinks()
  }, [addingDrink, drinkBeingPrepared])

  return (
    <div className="main-container">
      {renderContent()}
    </div>
  )
}
