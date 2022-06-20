import React, { memo } from 'react'

import Description from './components/description'
import Do from './components/do'

const Home = memo(() => {
  return (
    <>
      <Description />
      <Do />
    </>
  )
})

Home.displayName = 'Home'

export default Home
