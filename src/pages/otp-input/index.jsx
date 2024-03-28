import Layout from '@/Components/HOC/Layout'
import React, { useMemo, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@/Components/Base/Button';
import { OtpInput } from './otpInput';

const OtpUI = ({otpLength = 4}) => {
  const [otp, setOtp] = useState(Array(otpLength).fill("")); // stores otp value
  const isFilled = useMemo(()=> otp.findIndex(val=> val==="") === -1 ,[otp]) // to check if otp boxes are filled
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
