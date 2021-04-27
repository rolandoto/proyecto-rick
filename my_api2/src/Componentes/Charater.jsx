import React, { useState,useReducer,useMemo, useRef, useCallback} from 'react'
import useCharater from '../hooks/useCharater';
import Search from './Search';





/*uSE REDUCER*/
const initialState = {
    favorites: []
}


//api
const api = 'https://rickandmortyapi.com/api/character'

const favorireducer = (state,action) => {
    switch (action.type){
        case "ADD_TO_FAVORITE":
            return{
                ...state,
                favorites:[...state.favorites,action.playoad]
            };
       
            default:
                return state;
    }
}






export const Charater = () => {

    
    const [favorites,Dispath] = useReducer(favorireducer,initialState);
    const [serch,setsearch] = useState('')
    const searchinput = useRef(null)
   

    
//custon hooks
   const carater = useCharater(api)



console.log(serch)
//usereduccer
    const handeclick = favorite => {
        Dispath({type:'ADD_TO_FAVORITE',playoad:favorite})
       
    }

    
// userMemo
 //const handeSerach  = () => {
     // ES MUY INPORTANTE USAR TARGET PARA 
   // setsearch(searchinput.current.value)
    //use ref manejo profesional de formularios
    //es una mejor forma de buscar en el filtro del input
 //}
 
 
 const handeSerach= useCallback(() => {
     setsearch(searchinput.current.value)
     //uso del usecalback
 },[])
 //Entoces el aqui usa todo losm datos que esta recoletando la api en el hook
 //que en este caso seria carater 
 //el aqui los filtra y hace una function(user)
 //lowercase es para minuscula
 /*const filteruser = carater.filter((user) => {
     return user.name.toLowerCase().includes(serch.toLowerCase())

 })
 */
 //usememo
    const   filteruser = useMemo(()=>
    //aqui esto todo lo que entra
        carater.filter((user) => {
            //aqui esta diciendo lo que busque en serch aqui va a paracer
         return user.name.toLowerCase().includes(serch.toLowerCase())
    }),
    [carater,serch]  
    ) 
    console.log(filteruser)
   
    return (
        <div>
             
            <div>

            <div>
                <h1>rolando</h1>
            <h1>{favorites.favorites.map(favorite => (
                        <li key={favorite.id}>
                            
                            <h1>{favorite.name}</h1>
                            <img src={favorite.image} alt=""/>
                        </li>
                        
                    ))}</h1>
            </div>
        {/**use ref manejo profesional de formularios
    //es una mejor forma de buscar en el filtro del input */}
                <Search serch={serch} searchinput={searchinput}  handeSerach={handeSerach}  />
                <br/>
           <div>
             
           </div>
                <h1>{serch}</h1>

            {/* aquio puse le filter xq en donde voya buscar carateres */}
            {filteruser.map(characte =>(
               <div className="cambiar" key={characte.id}>
                   
                    <ul>
                    <h1>{characte.name}</h1>
                    <img src={characte.image}></img>
                    
                         <button onClick={()=> handeclick(characte)}>agregar productos</button>
                         
                    </ul>
               
                    <ul>
                    </ul>
              
                
                         </div>
                  
                  ))}
           
            </div>
        </div>
    )
}
