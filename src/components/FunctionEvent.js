import React from 'react'

const FunctionEvent = () => {
    function handleclick() {
        console.log("Clicked");
    }
    return (
        <div>
            <button className="btn" onClick={handleclick}>
                Click
            </button>
        </div >
    )
}

export default FunctionEvent
