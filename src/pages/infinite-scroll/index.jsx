import Layout from '@/Components/HOC/Layout'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const InfiniteScroll = ({}) => {
  const [posts, setPosts] = useState([]);
  const [rangeEnd, setRangeEnd] = useState(1);
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const targetRef = useRef(null);

  const fetchData = useCallback((skipValue) =>{
    fetch(`https://dummyjson.com/posts?skip=${10 * (skipValue)}&limit=10`)
    .then(res => res.json())
    .then(json => setPosts(prev=> [...prev,...json.posts]))

  },[]);

  useEffect(()=>{
    if(rangeEnd > 0){
        fetchData(rangeEnd - 1);
    }
  },[rangeEnd]);

  useEffect(()=>{
    const callback = (entries, observer) => {
        for(let index= 0 ; index< entries.length; index++){
            let entry = entries[index]
            if(entry.isIntersecting){
                entry.target.style.backgroundColor = 'red';
                setRangeEnd(prev => (prev + 1));
            }
        }
    };
    observerRef.current = new IntersectionObserver(callback, {root: containerRef.current, threshold: 0.1});
  },[]);

  useEffect(()=>{
    if (posts.length> 0 && typeof window !== undefined){
        if(targetRef.current){
            observerRef.current.unobserve(targetRef?.current);
        }
        let allPosts= document.querySelectorAll('#postItem');
        targetRef.current = allPosts[allPosts.length-1]
        observerRef.current.observe(targetRef.current)
    }
    return () => {
        return observerRef.current.disconnect()
    }
  },[posts]);


  return (
    <Layout headingText={'Infinite posts'}>
        <div className={styles.postsContainer} ref={containerRef} > 
            {posts?.length> 0 && posts?.map(item=> 
                <div id={`postItem`} className={styles.post} key={item.id}>{item.body}</div>)
            } 
        </div>
    </Layout>
  )
}

export default InfiniteScroll



