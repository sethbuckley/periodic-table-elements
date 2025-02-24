import React, { useState } from 'react'
import PeriodicTable from './components/PeriodicTable'
import ElementDetails from './components/ElementDetails'
import { ElementDataType } from './data/elements'

function App() {
  const [selectedElement, setSelectedElement] = useState<ElementDataType | null>(
    null,
  )

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Periodic Table of Elements
      </h1>
      <PeriodicTable onElementSelect={setSelectedElement} />
      {selectedElement && (
        <ElementDetails
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
        />
      )}
    </div>
  )
}

export default App
