import React, { useEffect, useState } from 'react'

const Mood = ({mood}:any) => {

  return (
      <div id="app-cover" className='flex max-w-[200px] md:max-w-fit items-center gap-2 md:gap-10 flex-col pl-0 md:pl-5 pb-2 md:pb-7'>
  <h1 className='text-[20px] md:text-[30px]'>Sacha is feeling</h1>
  <div id="app" className='flex gap-2 md:gap-5 scale-[0.7] md:scale-[1]'>
    <div className={`mood ${mood === 'great' ? 'active' : ''}`} id="mood-great">
      <div className="face">
        <div className="eyes-cover">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="mouth"></div>
      </div>
      <div className="mood-name"><span>great</span></div>
    </div>
    <div className={`mood ${mood === 'okay' ? 'active' : ''}`} id="mood-okay">
      <div className="face">
        <div className="eyes-cover">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="mouth"></div>
      </div>
      <div className="mood-name"><span>okay</span></div>
    </div>
    <div className={`mood ${mood === 'bad' ? 'active' : ''}`} id="mood-bad">
      <div className="face">
        <div className="eyes-cover">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="mouth"></div>
      </div>
      <div className="mood-name"><span>bad</span></div>
    </div>
  </div>
</div>
  )
}

export default Mood
