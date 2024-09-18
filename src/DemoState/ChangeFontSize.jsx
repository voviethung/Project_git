import React, { useState } from 'react'

const ChangeFontSize = () => {
    const [fontSize, setFontSize] = useState(50);
    console.log(fontSize)
    return (
        <div className='container'>
            <h1>Change fontSize</h1>
            <p style={{ fontSize: fontSize, color: 'red' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, rerum.</p>
            <button className='btn btn-success me-2' onClick={() => {
                setFontSize(fontSize + 1);
            }}>zoom in</button>
            <button className='btn btn-success ml-2' onClick={() => {
                setFontSize(fontSize - 1);
            }}>zoom out</button>
        </div>
    )
}

export default ChangeFontSize