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
          <div className="text-zone contact">
            <h1>
              <AnimatedLetters strArray={['C', 'o', 'n','t','a','c','t', ' ','m','e']}
                idx={15}
                letterClass={letterClass}
              />
            </h1>
            <p>
              I am interested in freelance opportunities - especially ambitious large projects. However, if you have other request
              or question, dont hesitate to contact ma using below form either.
            </p>
            <div className="contact-form">
              <form action="">
                <ul>
                  <li className="half">
                    <input type="text" name="name" placeholder='Name' required />
                  </li>
                  <li className="half">
                    <input type="email" name="email" placeholder='Email' required />
                  </li>
                  <li>
                    <input placeholder='Subject' type="text" name="subject" required />
                  </li>
                  <li>
                    <textarea name="message" placeholder='Message' required ></textarea>
                  </li>
                  <li>
                    <input type="submit" value="SEND" className='flat-button' />
                  </li>
                </ul>
              </form>
            </div>
          </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact