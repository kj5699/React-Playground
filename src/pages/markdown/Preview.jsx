import React from 'react';
import Header from './Header';
import styles from './styles.module.scss';

import { parseContent } from './utils';

const Preview = ({value}) => {
  return (
    <div className={styles.previewWrapper} >
        <Header label={'Preview'}/>
        <div className={styles.preview}  
            dangerouslySetInnerHTML={{__html:parseContent(value)}}>
        </div>
    </div>
  )
}

export default Preview