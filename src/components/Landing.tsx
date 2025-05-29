import React from 'react'
import Hero from './Hero'
import About from './About'

export default function Landing() {
  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <section className='#home'>
      <Hero />
      </section>
      <section className='#about'>
      <About />
      </section>
    </div>
  )
}

