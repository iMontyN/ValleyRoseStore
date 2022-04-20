import React from 'react';
import Image from "next/image";
import {productCard, cardHeader, cardBody, cardTitle, cardCategory, cardPrice, cardDescription, cardBtns} from './styles.module.scss'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDescription, productCategory,imageUrl, uid} = {...product};

  return (
        <aside className={productCard}>
          <header className={cardHeader}>
            <Image
              src={imageUrl}
              alt={productName}
              width={400}
              height={350}
              />
          </header>
          <main className={cardBody}>
            <h3 className={cardTitle}>{productName} <span className={cardCategory}>{productCategory}</span></h3>
            <p className={cardPrice}>${productPrice}</p>
            <p className={cardDescription}>{productDescription}</p>
          </main>
          <footer>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="uid" value={uid}/>
              <button className={cardBtns} type="submit">Buy Now</button>
              <button  disable className={cardBtns}>Add To Cart</button>
            </form>
          </footer>
        </aside>
  )
}

export default ProductCard