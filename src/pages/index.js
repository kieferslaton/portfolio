import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "gsap/SplitText"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from '../components/home/hero'
import Resume from '../components/home/resume'
import Portfolio from '../components/home/portfolio'
import Contact from '../components/home/contact'

gsap.registerPlugin(TextPlugin, ScrollTrigger, SplitText)

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
  </Layout>
  )
}

export default IndexPage
