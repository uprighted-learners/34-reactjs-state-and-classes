import React from 'react'

export default function CelsiusInput({ temperature, onTemperatureChange }) {
    return (
        <div>
            <label>Celcius
                <input
                    type="number"
                    value={temperature}
                    onChange={e => onTemperatureChange(e.target.value)}
                />
            </label>
        </div>
    )
}