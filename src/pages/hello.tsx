import React from 'react';
import styles from './index.less';
import { history } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Hello</h1>
      <button onClick={() => history.push('/world')}>Go to world</button>
      <button onClick={() => history.push('/')}>Go to root</button>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};