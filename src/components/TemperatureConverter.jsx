import React, { useState } from 'react'
import CelsiusInput from './CelsiusInput'
import FahrenheitInput from './FahrenheitInput'

// function to convert C to F
function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32
}

// function to convert F to C
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)

    // handler function for Celcius
    function handleCelsiusChange(celsius) {
        setCelsius(celsius)
        setFahrenheit(toFahrenheit(celsius))
    }

    // handler function for Fahrenheit
    function handleFahrenheitChange(fahrenheit) {
        setFahrenheit(fahrenheit)
        setCelsius(toCelsius(fahrenheit))
    }

    return (
        <div>
            <CelsiusInput
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <FahrenheitInput
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
        </div>
    )
}
