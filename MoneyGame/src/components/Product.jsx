import { findByDisplayValue, logDOM } from '@testing-library/dom'
import React from 'react'

const Product = ({product , basket , setBasket , totel , money}) => {

    const basketItem = basket.find(item =>  item.id === product.id)

  

    const addBasket  = () => {
       
        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id),checkBasket])

        }else {
            setBasket([...basket,{

                id:product.id,
                amount:1

            }])                    
        }
    }


    const deleteBasket  = () => {
       
        const checkBasket = basket.find(item => item.id === product.id)          
            checkBasket.amount -= 1
            if (checkBasket.amount === 0) {
                setBasket([...basket.filter(item => item.id !== product.id)])
            }else {
                setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
            }
    }





  return (   
      <>

<div className='product'>

    <img src={product.img} alt="" />
         
<h6> {product.title}</h6>    


<div className='price'>{product.price} £ </div> 
<div className='action'>
<button className='sell-btn' disabled={!basketItem} onClick={deleteBasket}>Sil</button>
    <span className="deger">
        {basketItem && basketItem.amount || 0 }
    </span>
  
    <button className='buy-btn' disabled={totel + product.price > money} onClick={addBasket}>Ekle</button>

 
 
 </div>   

</div>

      </>


  )
}

export default Product