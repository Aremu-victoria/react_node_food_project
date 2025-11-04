import React from 'react'

const RiderStatusId = ({ status, time, isActive, isCompleted }) => {
    const iconClasses = isCompleted ? 'bg-green-500' : isActive ? 'bg-yellow-500' : 'bg-gray-300';
    return (
      <div className="flex items-center mb-4">
        <div className={`w-6 h-6 flex items-center justify-center rounded-full ${iconClasses}`}>
          {isCompleted ? '✔️' : isActive ? '🟡' : '⚪'}
        </div>
        <div className="ml-2">
          <div className="text-sm">{time}</div>
          <div className="text-xs text-gray-500">{status}</div>
        </div>
      </div>
    );
    };

export default RiderStatusId