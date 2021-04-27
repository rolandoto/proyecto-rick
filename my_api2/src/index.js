import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
//import Charateres from './/Component/Charateres';
//import Nav from './Nav';

import reportWebVitals from './reportWebVitals';
import App from './App'
import TheContext from './context/Thecontex';

reactDOM.render(
  
    <React.StrictMode>
         <TheContext.Provider value="red">
         <App/>
         </TheContext.Provider>
        
    </React.StrictMode>,

    document.getElementById('root')



)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
