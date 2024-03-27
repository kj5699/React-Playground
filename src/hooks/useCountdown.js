import { useEffect, useMemo, useRef, useState } from 'react';


const useCountdown = (targetInSecs) => {
  
  const countDownTime = useMemo(()=> {
    if(targetInSecs >0){
        let targetMillisecs = (1 + +targetInSecs * 1000);
        return new Date(new Date().getTime() + +targetMillisecs).getTime()
    } else{
        return new Date().getTime();
    }
    },[targetInSecs]);
 
  const [countDown, setCountDown] = useState(countDownTime - new Date().getTime());
  const timerRef = useRef(null);



  useEffect(() => {
    if( countDownTime > new Date().getTime()){
        setCountDown(countDownTime - new Date().getTime());
        timerRef.current = setInterval(() => {
            setCountDown(prev => {
              if(prev>=0 ){
                  return countDownTime - new Date().getTime();
              }else{
                  clearInterval(timerRef.current)
                  return prev
              }
           })
          }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [countDownTime]);
  return countDown > 0 ? getReturnValues(countDown) : [0,0,0,0];
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };