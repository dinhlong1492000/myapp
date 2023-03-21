import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Page.module.sass';
import Header from '../Header';
import Footer from '../Footer'

const Page = ({ wide, children, title }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={cn(styles.page,"")}  style={{backgroundColor : "#0d0d0d"}}>
        <Header onOpen={() => setVisible(true)} />
        <div className={cn(styles.inner)} style={{ backgroundColor : "#0d0d0d",color: 'white'}}>
            {title && <div className={cn('h3', styles.title)}>{title}</div>}
            {children}
        </div>
        <Footer onOpen={() => setVisible(true)} ></Footer>
      </div>
    </>
  );
};

export default Page;
