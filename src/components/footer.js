import * as React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    const footer = React.useRef();
  
  
    React.useEffect(() => {
  
      gsap.set(footer.current, {opacity: 0, x: -50})
  
      const footerAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: footer.current, 
          start: 'bottom bottom'
        }
      })
      .to(footer.current, {opacity: 1, x: 0})
    })
  
    return(
      <div className="flex justify-center items-center py-10" ref={footer}>
        <a href="linkedin.com/kieferslaton"><FaLinkedin className="text-blue-500 text-2xl mx-2" /></a>
        <a href="github.com/kieferslaton"><FaGithub className="text-blue-500 text-2xl mx-2" /></a>
        <a href="instagram.com/kieferslaton"><FaInstagram className="text-blue-500 text-2xl mx-2" /></a>
      </div>
    )
  }

export default Footer