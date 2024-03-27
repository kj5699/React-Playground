import React from 'react'
import Header from './Header';
import styles from './styles.module.scss';
import { handleNewLineInLists } from './utils';

const Editor = ({onTextInput}) => {
    const handleKeyDown = (event) => {
        if (event.keyCode === 13){
            event.preventDefault();
            handleNewLineInLists()
        }
    }
  return (
    <div className={styles.editorWrapper}>
        <Header label={"Editor"}/>
        <div id = 'editor' 
            contentEditable 
            role='textbox'
            className={styles.editor} 
            onKeyDown={handleKeyDown}
            onInput = {onTextInput}
        ></div>
    </div>
  )
}

export default React.memo(Editor);