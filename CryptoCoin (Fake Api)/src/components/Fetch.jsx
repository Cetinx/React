import React , {useState , useEffect} from 'react'
import Coin from './Coin'

const Fetch = () => {

  const [data0,setData] = useState([])


  


  const getApi = async ()  =>  {

    const getApi = await fetch('https://random-data-api.com/api/crypto_coin/random_crypto_coin')

    const datas = await getApi.json()

   setData([...data0 , datas] )

 
 

}


  
   



   


  return (
    <div>
      <button className='btn' onClick={getApi}>EKLE</button>

      <div className='container'>
        {data0.map(rt => <Coin data0={rt} key={rt.id} />)}
        </div>
   
    

        
    </div>
  )
}

export default Fetch