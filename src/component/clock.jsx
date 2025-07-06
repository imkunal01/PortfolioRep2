import React from 'react'
import './clock.css'
function Clock() {
  return (
    <div>
        <div>
            {new Date().toLocaleString()}
        </div>
    </div>
  )
}

export default Clock