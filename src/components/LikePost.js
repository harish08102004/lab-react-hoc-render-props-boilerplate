import React, { useState } from 'react'
import withCounter from './Counter';

const LikePost = ({ count, handleClick }) => (
    <div>

      <button onClick={handleClick}>Like Post {count}</button>
      
    </div>
  )
  
export default withCounter(LikePost);
