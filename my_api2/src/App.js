import React, { Component } from 'react'
import { Charater } from './Componentes/Charater'
import Counterrr from './Componentes/Counterrr'
import { Header } from './Componentes/Header'

export class App extends Component {
    render() {
        return (
            <div>

                 <Header/>

                 <Charater/>
                <Counterrr/>
            </div>
        )
    }
}

export default App
