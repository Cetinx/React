import React , {useState , useEffect} from 'react';
import './App.css';
import Movie from './components/Movie';



function App() {


  const [getData,setGetData] = useState([])


  useEffect(()=>{
      
    const getFetch = async () => {

      const res = await fetch('http://www.omdbapi.com/?s=lord%20of%20the%20rings&apikey=7337b40f')
      const data = await res.json()
       setGetData(data.Search)
      
    

    }

    getFetch()

  },[])




 
  return (
    <div className="App">
      
     
        <Movie  getData={getData} setGetData={setGetData} />


    </div>
  );
}

export default App;
