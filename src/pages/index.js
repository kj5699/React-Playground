import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function () {
  const router = useRouter();
    useEffect(()=>{
      router.replace('/playground');
    },[]);
  return 
}
