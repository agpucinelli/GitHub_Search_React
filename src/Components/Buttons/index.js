import React from 'react'
import { ButtonSt, ButtonDiv,  } from './styled';




const Button = ({onClick}) => {
    return (
      <>     

      <ButtonDiv>
      <ButtonSt onClick={onClick}>BUSCAR
      
      </ButtonSt>
      </ButtonDiv>
      </>
      
    )
  }

  
export default (Button);
