import React from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'

function Home() {
  document.title = "FilmFlicks | Homepage"
  return (
    <>
      <Sidenav/>
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'></div>
      <Topnav/>

    </>
  )
}

export default Home