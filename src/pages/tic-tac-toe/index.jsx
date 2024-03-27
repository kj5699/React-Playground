import Layout from '@/Components/HOC/Layout'
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Gameboard from './gameboard';
import Button from '@/Components/Base/Button';
import { ResultType } from './logicUtils';


const TicTacToe = () => {
  const [result, setResult] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const resetHandler = () => {
    setGameStarted(false);
    setResult(null);
    setCurrentPlayer(null);
  }
  return (
    <Layout headingText={'Tic Tac Toe'}>
        <div className={styles.arena}>
            <div className={styles.resultSection}>
                <div className='w-32 mb-8'>
                  {gameStarted || result? 
                   <Button label={'Reset Game'} onClick={resetHandler} />
                  :<Button label={'Start game'} onClick={()=> setGameStarted(true)} />
                  }
                </div>
                {result ?
                  <div className='flex flex-col justify-center items-center '>
                    <div className='text-3xl text-main-secondary'>Match Result</div>
                    <div className='text-5xl text-main-primary'>{result.type === ResultType[0]? `${result?.player?.name} Won` : 'Match Tied' }</div>
                  </div>: 
                null}
              
            </div>
            <Gameboard 
              currentPlayer={currentPlayer} 
              setCurrentPlayer={setCurrentPlayer} 
              gameStarted={gameStarted} 
              result = {result}
              setResult={setResult}
              />
        </div>

    </Layout>
  )
}

export default TicTacToe