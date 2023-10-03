import React from 'react'
import { images } from '../../constants'
export const SubHeading = ({title , color}) => {
  return (
    <div style={{marginBottom:"1rem"}}>
        <p className='p__cormorant ' style={{color:color}}>{title}</p>
        <img src={images.spoon} alt="spoon" />
    </div>
  )
}
