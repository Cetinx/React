import React from 'react'
import BasketItem from './BasketItem'

export const Basket = ({basket , products,totel}) => {
  return (
    <div className='basket-container container' >
      <h2>Alış Veriş Detayları</h2>
      <ul>
      {
            basket.map(item => (
                <BasketItem key={item.id} item = {item}  product = {products.find(p => p.id === item.id)}  />
            ))
        }
      </ul>
    

        <div className='totel'>
         { totel > 0 && (
           <p>Totel : {totel} £ </p> 
         )}

         
        </div>
    </div>
  )
}
