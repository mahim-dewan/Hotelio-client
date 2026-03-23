import { format } from 'date-fns'
import { CalendarIcon, ChevronDown } from 'lucide-react'
import React from 'react'

const ToggleButton = ({state,isOpen, onToggle}) => {
  return (
    <button
        type="button"
        onClick={onToggle}
        className="w-full p-4 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-between gap-4 hover:border-primary/40 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-gray-100 rounded-lg">
            <CalendarIcon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Check-in — Check-out
            </span>
            <span className="text-sm font-semibold text-gray-700">
              {state[0].startDate
                ? format(state[0].startDate, "dd MMM yyyy")
                : "Start"}
              {" — "}
              {state[0].endDate
                ? format(state[0].endDate, "dd MMM yyyy")
                : "End"}
            </span>
          </div>
        </div>

        <ChevronDown
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
  )
}

export default ToggleButton