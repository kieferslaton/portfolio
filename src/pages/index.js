import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin.js'
import { SplitText } from 'gsap/SplitText.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

import Layout from "../components/layout"
import Seo from "../components/seo"

gsap.registerPlugin(TextPlugin, SplitText, ScrollTrigger)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allStrapiProjects {
      edges {
        node {
          Description
          Name
          Photo {
            alternativeText
            localFile {
              publicURL
            }
          }
          URL
          Technologies {
            Technology
          }
        }
      }
    }
    strapiAboutMe {
      Content
    }
    allStrapiEducations {
      edges {
        node {
          School {
            Degree
            Description
            School
            Years
          }
        }
      }
    }
    allStrapiSkills {
      edges {
        node {
          Category
          Name
        }
      }
    }
    allStrapiWorkExperiences {
      edges {
        node {
          Job {
            Company
            Dates
            Description
            Title
          }
        }
      }
    }
  }
  `)

  return(
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Resume data={data}/>
    <Portfolio data={data}/>
    <Contact />
    <Footer />
  </Layout>
  )
}

const Hero = () => {

  const backgroundText = React.useRef();
  const background = React.useRef();
  const headerText = React.useRef();
  const header = React.useRef();
  const headerNameText = React.useRef();
  const headerNameUnderline = React.useRef();
  const svgText = React.useRef();
  const svgMobile = React.useRef();
  const svgDesktop = React.useRef();

  React.useEffect(() => {
    var headerSplit = new SplitText(header.current);
    const changes = gsap.timeline({
      delay: 2
    })
    var animationDuration = 0.45

    const backgroundTextReverse = gsap.to(backgroundText.current, {duration: animationDuration, text: {value: '#3B82F6'}, ease: "none"}).reverse(0)
    const headerTextReverse = gsap.to(headerText.current, {duration: animationDuration, delay: animationDuration * 2, text: {value: 'serif'}, ease: 'none'}).reverse(0)
    const headerNameTextReverse = gsap.to(headerNameText.current, {duration: animationDuration, delay: animationDuration * 2, text: {value: 'none'}, ease: "none"}).reverse(0)
    const svgTextReverse = gsap.to(svgText.current, {duration: animationDuration, delay: animationDuration * 2, text: {value: '0px'}, ease: "none"}).reverse(0)

    changes
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
  <div className="flex flex-col-reverse lg:flex-row justify-center items-center bg-blue-500 text-white relative h-screen w-screen">
    <div className="absolute bg-blue-800 w-full h-full transform scale-x-0" ref={background}></div>
      <div className="bg-gray-700 flex flex-col justify-center items-center w-full h-1/2 relative lg:h-screen lg:w-5/12 lg:px-6 xl:px-10 xl:w-4/12 xl:py-24 2xl:text-lg" style={{fontFamily: 'Source Code Pro'}}>
        <svg className="absolute w-full h-20 left-0 lg:hidden transform scale-y-0" viewBox="0 0 100 100" preserveAspectRatio="none" ref={svgMobile} style={{bottom: 'calc(100% - 2px)'}}>
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
        <p className="ml-14 mb-0"><span className="text-gray-300">width:</span> <span ref={svgText}></span>;</p>
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
      <div className="w-full h-1/2 flex flex-col justify-center items-center relative text-center lg:w-7/12 lg:py-24 xl:w-8/12">
        <h1 className="text-5xl font-serif mb-3 whitespace-nowrap xl:text-7xl xl:mb-6 2xl:text-8xl" ref={header}>Hi, I'm <span className="relative">Kiefer<span className="underline absolute bottom-0 left-0 w-full h-1 border-b-4 border-white-600 transform scale-x-0" ref={headerNameUnderline}></span></span>.</h1>
        <p className="text-2xl mb-0">I'm a Web Developer.</p>
      </div>
    </div>
)
}

const Resume = (data, innerRef) => {
  const [activeResumeItem, setActiveResumeItem] = React.useState('About');
  const resumeItems = ['About','Skills', 'Work', 'Education'];

  const skills = data.data.allStrapiSkills.edges;
  const experience = data.data.allStrapiWorkExperiences.edges;
  const education = data.data.allStrapiEducations.edges;
  const about = data.data.strapiAboutMe['Content']
  const parsedSkills = []

  skills.forEach(skill => {
    if(!Object.keys(parsedSkills).includes(skill.node['Category'])){
      parsedSkills[skill.node['Category']] = [skill.node['Name']]
    } else {
      parsedSkills[skill.node['Category']].push(skill.node['Name'])
    }
  })

  let resumeSwitch

  if(activeResumeItem === 'About'){
    resumeSwitch= (
      <p className="text-sm lg:text-base md:px-10 lg:px-0 lg:ml-24">{about}</p>
    )
  }
  else if(activeResumeItem === 'Skills'){
    resumeSwitch = (
      <div className="flex flex-row flex-wrap justify-between md:px-10 lg:px-0 lg:ml-24">
      {Object.keys(parsedSkills).map(key => (
        <div className="mr-5 mb-5 lg:mr-10" key={key}>
          <h3 className="border-b-2 border-blue-600 pb-1 mb-3 text-xl lg:text-2xl">{key}</h3>
          <ul className="m-0">
            {parsedSkills[key].map(skill => (
              <li className="m-0 text-sm lg:text-base" key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    )
  } else if(activeResumeItem === 'Work'){
    resumeSwitch = (
    <div className="flex flex-col md:px-10 lg:px-0 lg:ml-24">
      {experience.map(item => (
        <div className="mb-5" key={item.node["Job"]["Title"]}>
          <h3 className="mb-1">{item.node["Job"]["Title"]}</h3>
          <h4 className="text-sm lg:text-base text-blue-500 mb-3">{item.node["Job"]["Company"]}, {item.node["Job"]["Dates"]}</h4>
          <p className="text-sm lg:text-base">{item.node["Job"]["Description"]}</p>
        </div>
      ))}
    </div>
    )
  } else {
    resumeSwitch = (
    <div className="flex flex-col md:px-10 lg:px-0 lg:ml-24">
      {education.map(item => (
        <div className="mb-5" key={item.node["School"]["Degree"]}>
          <h3 className="mb-1">{item.node["School"]["Degree"]}</h3>
          <h4 className="text-sm lg:text-base text-blue-500 mb-3">{item.node["School"]["School"]}, {item.node["School"]["Years"]}</h4>
          <p className="text-sm lg:text-base">{item.node["School"]["Description"]}</p>
        </div>
      ))}
    </div>
    )
  }

  const resume = React.useRef();


  React.useEffect(() => {

    gsap.set(resume.current, {opacity: 0, x: -50})

    var resumeAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: resume.current, 
        start: 'top center'
      }
    })
    .to(resume.current, {opacity: 1, x: 0, onComplete: () => {
      resumeAnimation.kill()
      resumeAnimation = null;
    }})
  }, [])

  return(
    <div className="max-w-4xl mx-auto p-5 mt-5 lg:mt-10" ref={resume}>
      <h2 className="px-5 text-3xl mb-10 lg:mb-20 lg:text-5xl flex items-center">Resume<span className="flex-1 border-b-2 border-blue-500 ml-5 lg:ml-10"></span></h2>
      <div className="flex flex-col lg:flex-row justify-start">
        <ul className="flex flex-row flex-no-wrap lg:flex-col m-0 mb-5 w-full lg:w-auto">
          {resumeItems.map(item => (
            <li key={item} className={`m-0 px-2 py-2 text-sm font-bold border-b-2 lg:border-l-2 lg:border-b-0 cursor-pointer w-1/4 text-center lg:w-auto lg:text-base lg:text-left lg:px-5 lg:py-3 ${item === activeResumeItem ? 'border-blue-600 text-blue-600' : ''}`} onClick={() => setActiveResumeItem(item)}>{item}</li>
          ))}
        </ul>
        {resumeSwitch}
      </div>
    </div>
  )
}

const Portfolio = (data) => {

  const projects = data.data.allStrapiProjects.edges;

  const portfolio = React.useRef();


  React.useEffect(() => {

    gsap.set(portfolio.current, {opacity: 0, x: -50})

    const portfolioAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: portfolio.current, 
        start: 'top center'
      }
    })
    .to(portfolio.current, {opacity: 1, x: 0})
  })

  return(
    <div className="max-w-4xl mx-auto p-5 mt-5 lg:mt-10" ref={portfolio}>
      <h2 className="px-5 text-3xl mb-10 lg:mb-20 lg:text-5xl flex items-center">Portfolio<span className="flex-1 border-b-2 border-blue-500 ml-5 lg:ml-10"></span></h2>
      {projects.map(project => (
        <div className="mb-10 md:px-10 lg:px-0">
        <h3>{project.node["Name"]}</h3>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap mb-3">
              {project.node["Technologies"].map(tech => (
                <div className="bg-blue-600 rounded-full px-3 py-1 mr-1 mb-2 text-xs font-bold text-white">{tech['Technology']}</div>
              ))}
            </div>
            <p className="text-sm lg:text-base">{project.node["Description"]}</p>
          </div>
          <div className="w-full lg:w-1/2 px-5 lg:-mt-10">
            <a href={project.node["URL"]}>
            <img src={`https://kieferslaton.com${project.node['Photo']['localFile']['publicURL']}`} />
            </a>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}

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

export default IndexPage
