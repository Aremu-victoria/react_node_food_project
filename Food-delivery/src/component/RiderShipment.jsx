import React from 'react'
import RiderStatusId from './RiderStatusId';

const RiderShipment = ({ statusUpdates }) => {
    return (
        <div className="mt-2 bg-white p-3">
          {statusUpdates.map((update, index) => (
            <RiderStatusId
              key={index}
              status={update.status}
              time={update.time}
              isActive={update.isActive}
              isCompleted={update.isCompleted}
            />
          ))}
        </div>
      );
}

export default RiderShipment