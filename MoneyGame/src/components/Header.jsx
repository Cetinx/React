import React from 'react'

function Header ({money , totel}) {

    return (
        <>
    
     
        
        <div className='header'>
    
        
           {totel >  0 &&  money - totel != 0 && (
                <>
                    Harçamak İçin <span> {money - totel} £  </span>   Paran Kaldi . 
                </>
            )}

            {totel ===  0 && (
                <>
                    Harçamak İçin <span> {money - totel} £ </span>   Paran Var . 
                </>
            )}
              {money - totel   ===  0 && (
                <>
                   Üzgünüm Ama HAHA
                </>
            )}
            <br />
       
        </div>
                
        
        
        
        </>


        
    )

}

export default Header;