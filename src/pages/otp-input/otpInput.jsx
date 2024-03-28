import React, { useRef } from 'react';
import styles from './styles.module.scss';

const OtpInput = ({values,setValues }) =>{
    const refArray = useRef([]);
    const onInputChangeHandler = (event, index)=>{
        event.preventDefault();
        let val = event.target.value.at(-1);
        if(/^\d+/.test(val)){
            setValues(prev => {
                let updated = [...prev]
                updated[index] = val
                return updated;
            })
            refArray[Math.min(index+1,values.length -1) ]?.focus()
        }
    }
    const BackSpaceHandler = (event, index) => {
        if(event.key=== 'Backspace'){
            event.preventDefault();
            setValues(prev => { let updated= [...prev]; updated[index] = ''; return updated;})  
            refArray[Math.max(index-1,0)]?.focus();
        }
    }  
    return (
        <div className={styles.input__container}>
            {Array.isArray(values) && values.map((value, index) => 
                <input id = {`inputBox_${index}`}
                        key={`inputBox_${index}`}
                        ref={el => refArray[index]=el}
                        value={value} 
                        className={`${styles.input__box}`} 
                        onChange={(e)=> onInputChangeHandler(e, index) }
                        onKeyDown={(e)=> BackSpaceHandler(e, index)}
                        />
                )}
        </div>
    )
};
export default React.memo(OtpInput);