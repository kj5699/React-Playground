import React, { useState } from 'react';
import styles from './styles.module.scss'
import InputSection from './InputSection';
import TimerSection from './TimerSection';
import Layout from '@/Components/HOC/Layout';

function CountDownTimer(){
  const [timerValue, setTimerValue] = useState(0);
  const [startTimer, setStartTimer] = useState(false);


  return (
    <Layout headingText={'Count Down Timer'}>
        <div className='flex flex-col items-center'> 
        <InputSection setTimerValue={setTimerValue} setStartTimer={setStartTimer} />
          <div className='mb-4'>Target Value is {timerValue}</div>
        <TimerSection targetValue={timerValue} startTimer={startTimer} setStartTimer ={setStartTimer}/>

        </div>
        
    </Layout>
  )
}
export default CountDownTimer;
