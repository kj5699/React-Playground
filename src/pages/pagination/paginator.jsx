import React from 'react';
import styles from './styles.module.scss';

export const PaginationContainer = ({paginationLength, setCurrentPage, currentPage}) => {
    
    const showPaginatedItem = (index) =>{

        if (currentPage <= 6){
            return index < 6 || index >= paginationLength-1
        }else{
            return index >= currentPage - 6 || index >= index >= paginationLength-1
        }
    }
    const onPrev =() => setCurrentPage(prev => Math.max(prev-1, 1))
    const onNext =() => setCurrentPage(prev => Math.min(prev +1, paginationLength))
    const onItemClick = (page) => setCurrentPage(page);

    return (<div className={styles.paginationContainer}>
        <div className={`${styles.paginatedItem} mr-4`} onClick={onPrev}>Prev</div>
        {Array(paginationLength).fill("").map((_, index)=>{
            return showPaginatedItem(index)? 
                <div id ={`item_${index+1}`} 
                    key= {`item_${index+1}`}
                    className={`${styles.paginatedItem} ${currentPage == index + 1 ? styles.currentPage :''}`}
                    onClick={()=>onItemClick(index+1)}
                    > {index + 1}
                </div>
                : <div>.</div> 
        })}
        <div className={`${styles.paginatedItem} ml-4`} onClick={onNext}>Next</div>
    </div>)
}