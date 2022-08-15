import './About.scss'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const animationTimeout = () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }

    useEffect(() => {
        return animationTimeout()
    }, [])

  return (
    <div className='container about-page'>
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
              
        </h1>
        <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
      </div>
    </div>
  )
}

export default About