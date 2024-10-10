import React, { useState } from 'react'

function Post({title,body}) {
  const [count,setCount] = useState(0)
  return (
  <div data-testid='countid'>
    {count}
  </div>
      )}
export default Post
