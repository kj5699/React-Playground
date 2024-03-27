import React, { useCallback, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Preview from './Preview';
import Editor from './Editor';
import { getCurrentLine } from './utils';
import Layout from '@/Components/HOC/Layout';


const Markdown = () => {
  const [editorValue, setEditorValue] =  useState('');
  const handleInputchange = useCallback((event) => {
    getCurrentLine();
    setEditorValue(event.target.innerText);
  },[]);
  return (
    <Layout headingText={'Markdown Editor'}>
        <div className={styles.markdown__container}> 
            <Editor onTextInput={handleInputchange}/>
            <Preview value={editorValue}/>
        </div>
    </Layout>
  )
}
export default Markdown


// Random Code