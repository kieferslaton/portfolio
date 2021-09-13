import * as React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {
    const contact = React.useRef();
  
  
    React.useEffect(() => {
  
      gsap.set(contact.current, {opacity: 0, x: -50})
  
      const contactAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: contact.current, 
          start: 'bottom bottom'
        }
      })
      .to(contact.current, {opacity: 1, x: 0})
    })
  
    return(
      <div className="max-w-4xl mx-auto p-5 mt-5 lg:mt-10" ref={contact}>
        <h2 className="px-5 text-3xl mb-10 lg:mb-20 lg:text-5xl flex items-center">Get In Touch<span className="flex-1 border-b-2 border-blue-500 ml-5 lg:ml-10"></span></h2>
        <div className="md:px-10 lg:px-0">
        <p className="mb-10">Want to collaborate? Need recommendations on which OneWheel to buy? Just looking to say hi? Drop me a line.</p>
        <a href="mailto:kieferslaton@gmail.com" className="px-3 py-3 text-white bg-blue-600 font-bold">Get In Touch</a>
        </div>
      </div>
    )
  }

export default Contact