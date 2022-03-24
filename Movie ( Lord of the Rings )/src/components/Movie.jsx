import React from 'react'

const Movie = ({getData , setGetData}) => {
    
  return (
    <div className='container'>
        
        {getData.map((data,idx) => (

            <div className='box' key={idx}>
                <img src={data.Poster} alt="" />
                    <h3>Name : {data.Title}</h3>
                    <h4>Type : {data.Type} | Year : {data.Year} </h4>
            </div>


        ))}


    </div>
  )
}

export default Movie