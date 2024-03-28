import React, { useRef } from 'react';
import styles from './styles.module.scss';

export const OtpInput = React.memo(({values,setValues }) =>{
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
            refArray[Math.min(index+1,values.length -1) ]?.current?.focus()
        }
    }
    const BackSpaceHandler = (event, index) => {
        if(event.key=== 'Backspace'){
            event.preventDefault();
            setValues(prev => { let updated= [...prev]; updated[index] = ''; return updated;})  
            refArray[Math.max(index-1,0)]?.current.focus();
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
});