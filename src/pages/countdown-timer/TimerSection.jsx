import { useCountdown } from '@/hooks/useCountdown'
import React, { useEffect, useMemo, useState } from 'react'

const TimerSection = ({targetValue, startTimer, setStartTimer}) => {
  const targetInSecs = startTimer ? targetValue : 0
  const [expired, setExpired ] = useState(false);
  const [days, hours, minutes, seconds] = useCountdown(targetInSecs);
  
  useEffect(()=>{
    console.log(days, hours, minutes, seconds);
    if (days + hours + minutes + seconds <= 0) {
        console.log()
        setExpired(true);
        setStartTimer(false);
      } 
      else{
        setExpired(false);
      }
  },
  [days, hours, minutes, seconds]);

 
  return (
    
    <div className='flex flex-col items-center'>
    <div> {expired?'Expired':'Remaining'} </div>
    <div className='flex justify-between p-4 '>
        <div className='mr-4'>
            <div>Days</div>
            <div className='border border-main-blue bg-main-white text-main-primary p-4 rounded-lg'> 
                {days}
            </div>
         </div>
         <div className='mr-4'>
            <div>Hours</div>
            <div className='border border-main-blue bg-main-white text-main-primary p-4 rounded-lg'> 
                {hours}
            </div>
         </div>
         <div className='mr-4'>
            <div>Mins</div>
            <div className='border border-main-blue bg-main-white text-main-primary p-4 rounded-lg'> 
                {minutes}
            </div>
         </div>
         <div>
            <div>Secs</div>
            <div className='border border-main-blue bg-main-white text-main-primary p-4 rounded-lg'> 
                {seconds}
            </div>
         </div>
        </div>
    </div>
  )
}

export default TimerSection