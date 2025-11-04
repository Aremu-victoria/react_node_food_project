
import React from 'react'
import Button from '../component/Botton'
const marchartRider = ({ride,rideImage,rideCon,genButton}) => {
  return (
    <div>
        <div className='mt-5 border-l-2 border-black pl-8 w-[16rem] md:[18rem]'>
            <h2 className='font-bold'>{ride}</h2>
            <img src={rideImage} alt="" />
            <p className='max-w-56 text-xs py-2'>{rideCon}</p>
            <Button generalButton={genButton}/>
        </div>
    </div>
  )
}

export default marchartRider
