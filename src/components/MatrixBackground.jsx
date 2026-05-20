import React, { useEffect, useState } from 'react'

const MatrixBackground = () => {
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const numColumns = Math.floor(window.innerWidth / 30)
    
    const newColumns = Array.from({ length: numColumns }, (_, i) => ({
      id: i,
      left: `${(i / numColumns) * 100}%`,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
      chars: Array.from({ length: 30 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    }))
    
    setColumns(newColumns)
  }, [])

  return (
    <>
      <div className="matrix-bg" />
      <div className="matrix-grid" />
      <div className="digital-rain">
        {columns.map((col) => (
          <div
            key={col.id}
            className="rain-column"
            style={{
              left: col.left,
              animationDelay: `${col.delay}s`,
              animationDuration: `${col.duration}s`
            }}
          >
            {col.chars.split('').map((char, i) => (
              <div key={i} style={{ opacity: 1 - (i * 0.03) }}>{char}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default MatrixBackground
