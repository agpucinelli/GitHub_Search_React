
import React  from 'react';
import { InputSt , InputStDiv } from './styled';






const InputComp = ({value, onChange}) => {


   
  
    return (
            
     <>
     <InputStDiv>
      
     
     
     <InputSt type="search" value={value} onChange={onChange} />
     
     </InputStDiv>
     </>
     
          
        
    )
    
  }
  
export default InputComp;