import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button } from 'react-bootstrap'
import hotDrinkImg from '../img/hot-drink.gif'

type props = {
  goHome: () => void
}

const Enjoy = ({ goHome }: props) => {
  return (
    <>
      <Fade delay={1000}>
        <h1><img src={hotDrinkImg} id="hot-drink-img" alt="hot-drink" />Enjoy!</h1>
      </Fade>
      <Fade delay={2000} className="text-center">
        <Button
          id="home-btn" 
          variant="link" 
          onClick={goHome}>
          Home
        </Button>
      </Fade>
    </>
  );
}

export default Enjoy;
