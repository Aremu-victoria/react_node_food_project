import React from 'react'
import RiderShipment from './RiderShipment'

const RiderOrder = ({order}) => {
  return (
    <div>
        <RiderShipment statusUpdates={order.statusUpdates} />
    </div>
  )
}

export default RiderOrder