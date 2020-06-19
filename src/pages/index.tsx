import React from 'react';
import styles from './index.less';
import { history } from 'umi';
export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={() => history.push('/hello')}>Go to hello</button>
      <button onClick={() => history.push('/world')}>Go to world</button>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};
