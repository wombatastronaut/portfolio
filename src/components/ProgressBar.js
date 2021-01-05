import React from 'react'

const ProgressBar = ({label, value})  => {
    if (!value) {
        return (null)
    }

    return (
        <div className="progress-bar-container">
            <span className="progress-bar-label inline-block my-1">{label}</span>
            <div className="progress-bar-outline">
                <div className="progress-bar" style={{
                    width: value + '%'
                }}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar