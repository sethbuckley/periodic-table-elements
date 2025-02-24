import React from 'react'
    import { X } from 'lucide-react'
    import { ElementDataType } from '../data/elements'

    interface ElementDetailsProps {
      element: ElementDataType
      onClose: () => void
    }

    const ElementDetails: React.FC<ElementDetailsProps> = ({
      element,
      onClose,
    }) => {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X />
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-2">{element.name}</h2>
            <p className="text-gray-700 mb-4">
              Symbol: {element.symbol}, Atomic Number: {element.number}
            </p>
            <p className="text-gray-600">
              Summary: {element.summary}
            </p>
            <p className="text-gray-600">
              Atomic Mass: {element.atomic_mass}
            </p>
            <p className="text-gray-600">
              Category: {element.category}
            </p>
            {element.source && (
              <p className="text-gray-600">
                <a
                  href={element.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Source
                </a>
              </p>
            )}
          </div>
        </div>
      )
    }

    export default ElementDetails
