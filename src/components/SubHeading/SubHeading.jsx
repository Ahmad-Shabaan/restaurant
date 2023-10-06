import React from 'react'
import { images } from '../../constants'
export const SubHeading = ({title }) => {
  return (
    <div style={{marginBottom:"1rem"}}>
        <p className='p__cormorant ' style={{color:'white'}}>{title}</p>
        <img src={images.spoon} alt="spoon" />
    </div>
  )
}
