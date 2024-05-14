import React, { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';

import { ProductContext } from './ProductCard';

export interface BtnProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ style }: BtnProps) => {
  //Maxcount
  const { increaseBy, counter, initialValues } = useContext(ProductContext);

  // isMaxReached UseCallback

  const isMaxReached = useCallback(() => {
    if (counter === initialValues?.maxCount) {
      return true;
    } else {
      return false;
    }
  }, [counter, initialValues?.maxCount]);

  return (
    <div className={styles.buttonsContainer} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -{' '}
      </button>
      <button className={styles.countLabel}>{counter}</button>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disable : ''
        }`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
