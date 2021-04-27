import React, { useState,useContext} from 'react'
import Thecontex from '../context/Thecontex'

export const Header = () => {

    const[darmode,setmode] = useState(false)
    console.log(darmode)

    const  color = useContext(Thecontex)
    
    
   
    const handeClcik = () => {
        //al darl click el me va cambiar a true porque estoy indicando que sea diferente
        setmode(!darmode)
       
    } 
    return (
        <div className="Header">
            <h1 style={{color}}>ReactHooks</h1>
            {/* si en este caso daromode es verdadero me va a mostar darmode si es false me va a mostar ligth mode */}
            <button type="button" onClick={handeClcik}> {darmode ? 'darmode': 'ligth mode'}</button>

        
        </div>
    )
}

