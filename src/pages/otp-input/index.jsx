import Layout from '@/Components/HOC/Layout'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@/Components/Base/Button';
import { document } from 'postcss';

const OtpInput = React.memo(({values,setValues }) =>{
    const refArray = Array(values.length).fill(null).map(()=> useRef(''));
    const onInputChangeHandler = (event, index)=>{
        event.preventDefault();
        let val = event.target.value.at(-1);
        if(/^\d+/.test(val)){
            setValues(prev => {
                let updated = [...prev]
                updated[index] = val
                return updated;
            })
            if(index < values.length -1){
                refArray[index+1]?.current?.focus()
            }
        }
    }
    const BackSpaceHandler = (event, index) => {
        if(event.key=== 'Backspace'){
            event.preventDefault();
            setValues(prev => { let updated= [...prev]; updated[index] = ''; return updated;})
            if(index > 0){
                refArray[index-1]?.current.focus()
            }
        }
    }  
    return (
        <div className={styles.input__container}>
            {Array.isArray(values) && values.map((value, index) => 
                <input id = {`inputBox_${index}`}
                        ref={refArray[index]}
                        value={value} 
                        className={`${styles.input__box}`} 
                        onChange={(e)=> onInputChangeHandler(e, index) }
                        onKeyDown={(e)=> BackSpaceHandler(e, index)}
                        />
                )}
        </div>
    )
})

const OtpUI = ({otpLength = 4}) => {
  const [otp, setOtp] = useState(Array(otpLength).fill(""));
  const isFilled = useMemo(()=>{
    return otp.findIndex(val=> val==="") === -1 
  },[otp])
  console.log('OTP', otp);
  return (
    <Layout headingText={'Otp input'}>
        <div className={styles.otp__container}>
            <OtpInput values = {otp} setValues={setOtp} />
            <Button label={'Verify OTP'} onClick={()=> console.log(otp)} disabled={!isFilled} />
        </div>
    </Layout>
  )
}

export default OtpUI;


//