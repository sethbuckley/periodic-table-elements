import React from 'react'
import { ElementDataType } from '../data/elements'

interface ElementTileProps {
  element: ElementDataType
  onElementSelect: (element: ElementDataType) => void
}

const ElementTile: React.FC<ElementTileProps> = ({
  element,
  onElementSelect,
}) => {
  const getBackgroundColor = (category: string) => {
    switch (category) {
      case 'alkali metal':
        return 'bg-red-300 hover:bg-red-400'
      case 'alkaline earth metal':
        return 'bg-orange-300 hover:bg-orange-400'
      case 'transition metal':
        return 'bg-yellow-300 hover:bg-yellow-400'
      case 'post-transition metal':
        return 'bg-green-300 hover:bg-green-400'
      case 'metalloid':
        return 'bg-teal-300 hover:bg-teal-400'
      case 'nonmetal':
        return 'bg-blue-300 hover:bg-blue-400'
      case 'noble gas':
        return 'bg-indigo-300 hover:bg-indigo-400'
      case 'lanthanide':
        return 'bg-purple-300 hover:bg-purple-400'
      case 'actinide':
        return 'bg-pink-300 hover:bg-pink-400'
      default:
        return 'bg-gray-300 hover:bg-gray-400'
    }
  }

  return (
    <button
      className={`${getBackgroundColor(
        element.category,
      )} w-16 h-16 border border-gray-400 rounded-md flex flex-col items-center justify-center text-sm font-medium transition-all duration-200 focus:outline-none`}
      onClick={() => onElementSelect(element)}
      aria-label={element.name}
      style={{
        gridColumn: `${element.xpos} / span 1`,
        gridRow: `${element.ypos} / span 1`,
      }}
    >
      <span className="text-lg">{element.symbol}</span>
      <span className="text-xs">{element.number}</span>
    </button>
  )
}

export default ElementTile
