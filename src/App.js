import React from 'react'
import TemperatureConverter from './components/TemperatureConverter'
import AppClass from './components/AppClass'
import AppFunctional from './components/AppFunctional'

import "./App.css"

export default function App() {
    return (
        <div className='container'>
            {/* <TemperatureConverter /> */}
            <AppClass />
            <AppFunctional />
        </div>
    )
}
