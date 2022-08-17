import Loader from 'react-loaders'
import './Contact.scss';
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

    const animationTimeout = () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }

    useEffect(() => {
      return animationTimeout()
    }, [])

  return (
    <>
        <div className='container contact-page'>
          <div className="text-zone">
            <h1>
              <AnimatedLetters strArray={['C', 'o', 'n','t','a','c','t', ' ','m','e']}
                idx={15}
                letterClass={letterClass}
              />
            </h1>
          </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact