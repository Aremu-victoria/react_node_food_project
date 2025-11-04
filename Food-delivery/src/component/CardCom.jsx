import React from 'react'
import { Card } from 'flowbite-react'
import Botton from './Botton'
const CardCom = ({shearButton,cardSubTitle,cardTitle,style,Cardimg}) => {
  return (
    <>
    <div style={style} className=''>
      <Card
      className="max-w-xs bg-transparent border-0 rounded-xl overflow-hidden shadow-none"
      imgAlt="img"
      imgSrc={Cardimg}
    >
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">
          {cardTitle}
        </h5>
        <p className="text-sm text-gray-900">{cardSubTitle}</p>
        <Botton generalButton={shearButton}/>
    </Card>
    </div>
    </>
  )
}

export default CardCom
