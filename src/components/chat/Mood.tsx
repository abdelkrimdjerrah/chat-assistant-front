import React, { useEffect, useState } from 'react'

const Mood = ({mood}:any) => {

  return (
      <div id="app-cover" className='flex items-center flex-col py-5'>
  <h1 className='leading-3'>Ines is feeling</h1>
  <div id="app" className='flex gap-5'>
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
