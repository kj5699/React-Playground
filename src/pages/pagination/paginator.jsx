import React from 'react';
import styles from './styles.module.scss';

const PaginationContainer = ({paginationLength, setCurrentPage, currentPage}) => {
    
    const showPaginatedItem = (index) =>{

        if (currentPage <= 6){
            return index < 6 || index >= paginationLength-1
        }else{
            return index >= currentPage - 6 || index >= index >= paginationLength-1
        }
    }
    const onItemClick = (event , page) => {
        event.preventDefault()
        setCurrentPage(page)
    };

    return (<div className={styles.paginationContainer}>
        <button className={`${styles.paginatedItem} mr-4`} 
                onClick={(e)=> onItemClick(e,Math.max(currentPage, 1))} >
                Prev
        </button>
            {Array(paginationLength).fill("").map((_, index)=>{
                return showPaginatedItem(index)? 
                    <button id ={`item_${index+1}`} 
                        key= {`item_${index+1}`}
                        className={`${styles.paginatedItem} ${currentPage == index + 1 ? styles.currentPage :''}`}
                        onClick={()=>onItemClick(index+1)}
                        > {index + 1}
                    </button>
                    : <span>.</span>
            })}
        <button className={`${styles.paginatedItem} ml-4`} 
                onClick={(e)=> onItemClick(e,Math.min(currentPage+1 , paginationLength))}>
            Next
        </button>
    </div>)
}
export default PaginationContainer;