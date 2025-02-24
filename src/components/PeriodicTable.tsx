import React from 'react'
import ElementTile from './ElementTile'
import { elements, ElementDataType } from '../data/elements'

interface PeriodicTableProps {
  onElementSelect: (element: ElementDataType) => void
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ onElementSelect }) => {
  return (
    <div className="grid grid-cols-18 gap-1">
      {elements.map((element) => (
        <ElementTile
          key={element.number}
          element={element}
          onElementSelect={onElementSelect}
        />
      ))}
    </div>
  )
}

export default PeriodicTable
