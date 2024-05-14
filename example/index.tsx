import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const App = () => {
  const product = {
    id: '1',
    title: 'Coffee 2',
    //img: './coffeemug2.png',
  };
  return (
    <>
      <ProductCard product={product} initialValues={{ count: 4, maxCount: 5 }}>
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage img="" />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
