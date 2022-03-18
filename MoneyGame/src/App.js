import React , {useEffect,useState} from 'react'
import './App.css';
import { Basket } from './components/Basket';

//COMPONENTS
import Header from './components/Header';
import Product from './components/Product';
import products from './products.json';

function App() {

  const [money,setMoney] = useState(1300)

  const [basket,setBasket] = useState([])

  const [totel,setTotel] = useState(0)


  useEffect(()=>{

    setTotel(

      basket.reduce((acc,item) =>{

        return acc + (item.amount * (products.find(product => product.id === item.id).price))

      },0)   
  
      )

   },[basket])

   const resetBasket= () => {

    setBasket([])

   }

  return (
    <div className="App">
     
      <Header money = {money} totel={totel} setTotel={setTotel} />
      <div className='container products'>
      {products.map(product => (
          <Product key={product.id} product={product} basket={basket}  setBasket={setBasket} totel={totel} money={money}  />
      ))}
      </div>
    
        
     
        
        <Basket  totel={totel} basket={basket} products={products} />
        
        <div className="header-top">
        <h5>   Almanya'da Asgeri Ücretle Çalışan Bir Vatandaş Haftada 5 gün'De 8 SAAT Çalışarak 1300 EURO Kazanır </h5>
        </div>
    </div>
  );
}

export default App;
