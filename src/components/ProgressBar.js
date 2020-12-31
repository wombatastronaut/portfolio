import React, { useState, useEffect } from 'react'

function ProgressBar ({label, value, max}) {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
       calculatePercentage()
    })

    const calculatePercentage = () => {
        if (!value || !max) {
            return
        }

        let result = (value * 100) / max
        setPercentage(result)
    }

    return (
        <div className="progress-bar-container">
            <span className="progress-bar-label inline-block my-1">{label}</span>
            <div className="progress-bar-outline">
                <div className="progress-bar" style={{width: percentage + '%'}}></div>
            </div>
        </div>
    )
}

export default ProgressBar