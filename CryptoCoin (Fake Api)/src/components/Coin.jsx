import React from 'react'

function Coin( {data0}) {
  return (
  


             
             <div className='box'>
             <img src={data0.logo} alt="" />
             <h2>coin_name : {data0.coin_name}</h2>
              <h3>acronym : {data0.acronym}</h3>
             </div>


            
            


          


   
  )
}

export default Coin