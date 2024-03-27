import Button from '@/Components/Base/Button';
import React, { useRef } from 'react'

const InputSection = ({setTimerValue, setStartTimer}) => {
  const inputRef = useRef({value:0});
  const resetHandler = () => {
    setTimerValue(0);
    inputRef.current.value = 0;
    setStartTimer(false);
  }
  const startHandler=()=>{
    setStartTimer(true);
    setTimerValue(inputRef.current.value);
  }
  
  return (
    <div id= 'input-section' className='inputSection py-4 mb-4'>
        <div className='mb-4 w-full'>
        <label id='timer' className='mr-4'>Time</label>
        <input id='timer' 
                type='number' 
                placeholder='Enter Time in seconds' 
                ref={inputRef}  
                className='h-12 p-4 rounded border border-gray-300 mr-4 text-main-primary'> 

        </input>
        </div>
        <div className='flex justify-between'>
        <Button label={'Start'} onClick={startHandler} buttonClass={'mr-4'}/>
        <Button label={'Reset'} onClick={resetHandler} />
        </div>
        
    </div>
  )
}

export default InputSection;