import './About.scss'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {

  return (
    <div className='container about-page'>
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
              
        </h1>
      </div>
    </div>
  )
}

export default About