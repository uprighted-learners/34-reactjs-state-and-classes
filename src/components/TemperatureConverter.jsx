import React, { useState } from 'react'

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)
    return (
        <div>Temperature Converter</div>
    )
}
