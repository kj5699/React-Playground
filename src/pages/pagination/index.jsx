import Layout from '@/Components/HOC/Layout';
import styles from './styles.module.scss';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PaginationContainer from './paginator';


const Pagination = () => {
  const router = useRouter();
  const {query, pathname, push} = router;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([])
  
  
  useEffect(()=>{
    if( router.isReady ){
        push(pathname, { query: {page: currentPage} })
    }
  },[router.isReady,currentPage]);
  
  useEffect(()=>{
    console.log('Use Effect Called');
    const fetchData = async () =>{
        let res =fetch(`https://dummyjson.com/products?skip=${10* (currentPage-1)}&limit=10`)
        .then(res => res.json())
        .then(json => setData(json.products))
    };
    fetchData();
  },[currentPage])
  
  

  return (
    <Layout headingText={"Products Page"}>
        <div className={styles.productContainer} > {data.map(item=> <div className={styles.item} key={item.id}>{item.title}</div>)} </div>
        <PaginationContainer paginationLength={8} setCurrentPage = {setCurrentPage} currentPage={currentPage} />
    </Layout>
  )
}

export default Pagination