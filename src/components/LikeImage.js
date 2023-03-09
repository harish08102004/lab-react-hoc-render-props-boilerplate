import React, { useState } from 'react'
import withCounter from './Counter';

const LikeImage = ({ count, handleClick }) => (


    <div>

      <button onClick={handleClick}>Like Image {count}</button>
      
    </div>
  )


export default withCounter(LikeImage);
