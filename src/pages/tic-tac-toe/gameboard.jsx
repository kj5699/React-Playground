import { useEffect, useState } from 'react';
import { InitalBoardValue, Players, ResultType, checkAllFilled, checkColumns, checkDiagnols, checkRows, getWinner } from '../../utils/logicUtils';
import styles from './styles.module.scss';

const Cell = ({value, cellClickHandler}) => {
    return (
        <div className={`${styles.cell} ${value && value!=='' ?styles.filled: ''}`} onClick={cellClickHandler}>
            <div className={styles.cellText}> {value}</div>
        </div>
    );
}

const Gameboard = ({ setResult, currentPlayer, setCurrentPlayer, gameStarted, result}) => {
  const [values, setValues] = useState(InitalBoardValue);
  console.log(values);
  useEffect(()=> {
    if(gameStarted){
        setCurrentPlayer(Players[0]);
        setResult(null);
    }else {
        setValues(InitalBoardValue);
    }
  },[gameStarted]);
  
  useEffect(()=>{
    if(checkRows(values)[0]){
        const value= checkRows(values)[1]
        setResult({type: ResultType[0] , player: getWinner(value)})
    }else if(checkColumns(values)[0]){
        const value= checkColumns(values)[1]
        setResult({type: ResultType[0] , player: getWinner(value)})
    }else if(checkDiagnols(values)[0]){
        const value= checkDiagnols(values)[1]
        setResult({type: ResultType[0] , player: getWinner(value)})
    }else if (checkAllFilled(values)){
        setResult({type: ResultType[1] , player: null})
    }
  }, [values]);

  const cellClickHandler = (index) => {
    if(!values[index] || values[index]==='') {
        setValues(prev =>  {
            let updated = [...prev]
            updated.splice(index, 1, currentPlayer.value)
            return updated
        });
        setCurrentPlayer(prev=> prev.id === 0 ? Players[1] : Players[0])
    }
  };


  return (
    <section className=' relative p-8 flex flex-col items-center justify-center w-1/2 h-full'>
        {!gameStarted ? 
            <div className={`${styles.overlay}`}
                onClick={(e)=> e.stopPropagation()}> 
                Start the game to unlock
            </div> :
            result ?
            <div className={`${styles.finished} ${styles.overlay}`}
                onClick={(e)=> e.stopPropagation()}> 
                Game Ended
            </div> : null
        }
        <div className={styles.playerSection} >
            {Object.keys(Players).map((key, index) => {
                const isPlayersChance = currentPlayer?.id === Players[key].id 
                return (<div key= {key} className='text-xl text-main-primary'>
                            <span className={`w-3 h-3 rounded-lg bg-main-red inline-block mr-2 ${!isPlayersChance && 'opacity-0'}`} ></span>
                            {Players[key].name}
                        </div>
                )
            })}
        </div>
        <div className={styles.gameBoard}>
            {Array(9).fill(0).map((item, index) => {
                return <Cell key={index} value = {values[index]} cellClickHandler={()=>cellClickHandler(index)}/>
            })}
        </div>
        
    </section>
  )
}

export default Gameboard