import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Page.module.sass';
import Header from '../Header';

const Page = ({ wide, children, title }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={cn(styles.page,"")}>
        <Header onOpen={() => setVisible(true)} />
        <div className={cn(styles.inner,"container mt-4")}>
          <div
            className={cn(styles.container, {
              [styles.wide]: wide,
            })}
          >
            {title && <div className={cn('h3', styles.title)}>{title}</div>}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
