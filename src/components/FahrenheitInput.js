import React from 'react'

export default function FahrenheitInput({ temperature, onTemperatureChange }) {
    return (
        <div>
            <label>Fahrenheit
                <input
                    type="number"
                    value={temperature}
                    onChange={e => onTemperatureChange(e.target.value)}
                />
            </label>
        </div>
    )
}
