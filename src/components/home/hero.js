import * as React from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin.js'
import { SplitText } from 'gsap/SplitText'

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = React.useState({
      width: undefined,
      height: undefined,
    });
    React.useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

const Hero = () => {

    const width = useWindowSize().width

    const hero = React.useRef();
    const backgroundText = React.useRef();
    const background = React.useRef();
    const headerText = React.useRef();
    const header = React.useRef();
    const headerNameText = React.useRef();
    const headerNameUnderline = React.useRef();
    const svgText = React.useRef();
    const svgMobile = React.useRef();
    const svgDesktop = React.useRef();
  
    const setViewHeight = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  
    React.useEffect(() => {
      setViewHeight();
  
      var headerSplit = new SplitText(header.current);
      const changes = gsap.timeline()
      var animationDuration = 0.45
  
      const backgroundTextReverse = gsap.to(backgroundText.current, {duration: animationDuration, text: {value: '#3B82F6'}, ease: "none"}).reverse(0)
      const headerTextReverse = gsap.to(headerText.current, {duration: animationDuration, delay: animationDuration * 2, text: {value: 'serif'}, ease: 'none'}).reverse(0)
      const headerNameTextReverse = gsap.to(headerNameText.current, {duration: animationDuration, delay: animationDuration * 2, text: {value: 'none'}, ease: "none"}).reverse(0)
      const svgTextReverse = gsap.to(svgText.current, {duration: animationDuration, delay: animationDuration * 2, text: {value: '0px'}, ease: "none"}).reverse(0)
  
      changes
      .to('body', {opacity: 1, duration: animationDuration})
      .to({}, {duration: 1})
      .add(backgroundTextReverse)
      .to(backgroundText.current, {duration: animationDuration, text: {value: '#F9DB3C'}, ease: "none"})
      .to(background.current, {duration: animationDuration, scaleX: 1, transformOrigin: "0% 0%"})
      .add(headerTextReverse)
      .to(headerText.current, {duration: animationDuration, text: {value: 'sans-serif'}, ease: 'none'})
      .set(headerSplit.chars, {duration: animationDuration, fontFamily: 'sans-serif', stagger: 0.1})
      .add(headerNameTextReverse)
      .to(headerNameText.current, {duration: animationDuration, text: {value: 'underline'}, ease: "none"})
      .to(headerNameUnderline.current, {duration: animationDuration, delay: animationDuration * 0.5, scaleX: 1, transformOrigin: '0% 0%'})
      .add(svgTextReverse)
      .to(svgText.current, {duration: animationDuration, text: {value: '20%'}, ease: "none"})
      .to(svgDesktop.current, {duration: animationDuration, scaleX: 1, transformOrigin: '0% 0%'})
      .to(svgMobile.current, {duration: animationDuration, scaleY: 1, transformOrigin: '100% 100%'}, `-=${animationDuration}`)
    }, [])
  
    return(
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center bg-blue-500 text-white relative h-screen w-screen" ref={hero}>
      <div className="absolute bg-blue-800 w-full h-full transform scale-x-0" ref={background}></div>
        <div className="bg-gray-700 flex flex-col justify-center text-sm items-center w-full h-6/10 relative md:text-base lg:h-screen lg:w-5/12 lg:px-6 xl:px-10 xl:w-4/12 xl:py-24 2xl:text-lg" style={{fontFamily: 'Source Code Pro'}}>
          <svg className="absolute w-full h-16 left-0 lg:hidden transform scale-y-0" viewBox="0 0 100 100" preserveAspectRatio="none" ref={svgMobile} style={{bottom: 'calc(100% - 2px)'}}>
            <polygon points="0,0 100, 100 0, 100" fill="#374151" />
          </svg>
          <svg className="absolute left-full top-0 hidden w-20 h-full transform scale-x-0 lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" ref={svgDesktop}>
            <polygon points="0,0 100, 0 0, 100" fill="#374151" />
          </svg>
          <div>
          <p className="text-yellow-300 mb-0">{'.hero {'}</p>
          <p className="ml-5 mb-0"><span className="text-gray-300">background-color:</span> <span ref={backgroundText}></span>;</p>
          <p className="ml-5 mb-0 text-blue-300"><span className="text-yellow-300">&</span>{'_code {'}</p>
          <p className="ml-10 mb-0 text-purple-400"><span className="text-yellow-300">&</span>{':after {'}</p>
          <p className="ml-14 mb-0"><span className="text-gray-300">{width > 1024 ? 'width:' : 'height:'}</span> <span ref={svgText}></span>;</p>
          <p className="ml-10 mb-0 text-purple-400">{'}'}</p>
          <p className="ml-5 mb-0 text-blue-300">{'}'}</p>
          <p className="ml-5 mb-0 text-blue-300"><span className="text-yellow-300">&</span>{'_header {'}</p>
          <p className="ml-10 mb-0"><span className="text-gray-300">font-size:</span> 3rem;</p>
          <p className="ml-10 mb-0"><span className="text-gray-300">font-family:</span> <span ref={headerText}></span>;</p>
          <p className="ml-10 mb-0 text-purple-400"><span className="text-yellow-300">&</span>{'_name {'}</p>
          <p className="ml-14 mb-0"><span className="text-gray-300">text-decoration:</span> <span ref={headerNameText}></span>;</p>
          <p className="ml-14 mb-0"><span className="text-gray-300">font-weight:</span> normal;</p>
          <p className="ml-10 mb-0 text-purple-400">{'}'}</p>
          <p className="ml-5 mb-0 text-blue-300">{'}'}</p>
          <p className="text-yellow-300 mb-0">{'}'}</p>
          </div>
        </div>
        <div className="w-full h-4/10 flex flex-col justify-center items-center relative text-center lg:w-7/12 lg:py-24 xl:w-8/12">
          <h1 className="text-5xl font-serif mb-3 whitespace-nowrap xl:text-7xl xl:mb-6 2xl:text-8xl" ref={header}>Hi, I'm <span className="relative">Kiefer<span className="underline absolute bottom-0 left-0 w-full h-1 border-b-4 border-white-600 transform scale-x-0" ref={headerNameUnderline}></span></span>.</h1>
          <p className="text-2xl mb-0">I'm a Web Developer.</p>
        </div>
      </div>
  )
  }

  export default Hero