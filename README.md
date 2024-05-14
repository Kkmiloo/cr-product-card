# Cr-Product-card

Este es un paquete de pruebas para NPM

## Camilo Reyes

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'cr-product-card'

```

```
  <ProductCard
          key={product.id}
          product={product}
          initialValues={{ count: 4, maxCount: 5 }}
        >
          {({reset, count, isMaxCountReached, maxCount, increaseBy}) => (
            <>
              <ProductImage img='' />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>

```
