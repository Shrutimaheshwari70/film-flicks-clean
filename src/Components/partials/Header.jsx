import React from 'react'

function Header({ data }) {
  return (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }} className='bg-black w-full h-[60vh] flex flex-col justify-end p-[6.5%] items-start'>

    </div>
  )
}

export default Header