import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import axios from '../utils/Axios'

function Home() {
  document.title = "FilmFlicks | Homepage";
  const [wallpaper, setwallpaper] = useState(null)
  // wallpaper = null


  const GetHeaderwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      console.log(data);
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()]
      setwallpaper(randomdata)
      // setwallpaper = 54
    }
    catch (err) {
      console.log(err);

    }
  }
  useEffect(() => {
    GetHeaderwallpaper()
  }, [])

  return wallpaper ?  (
    <>
      <Sidenav />
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : <h1 className='text-3xl text-white'>loading ...</h1>
}

export default Home