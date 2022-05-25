import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin.js"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/home/hero"
import Resume from "../components/home/resume"
import Portfolio from "../components/home/portfolio"
import Contact from "../components/home/contact"
import useWindowSize from "../useWindowSize"

gsap.registerPlugin(TextPlugin, ScrollTrigger, SplitText, DrawSVGPlugin)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpPage {
        edges {
          node {
            title
            homepageFields {
              resume {
                aboutMe
                education {
                  ... on WpEducation {
                    id
                    EducationFields {
                      date
                      description
                    }
                    title
                  }
                }
                skills {
                  ... on WpSkill {
                    id
                    title
                    skillCategories {
                      nodes {
                        name
                      }
                    }
                  }
                }
                work {
                  ... on WpWorkExperience {
                    id
                    EducationFields {
                      date
                      description
                    }
                    title
                  }
                }
              }
            }
          }
        }
      }
      allWpProject(sort: { fields: ProjectFields___order }) {
        edges {
          node {
            title
            featuredImage {
              node {
                sourceUrl
                localFile {
                  childrenImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            content
            ProjectFields {
              skills {
                ... on WpSkill {
                  id
                  title
                }
              }
              order
              url
            }
          }
        }
      }
    }
  `)

  const arrow = React.useRef()
  const layout = React.useRef()
  const hero = React.useRef()

  const width = useWindowSize().width

  const q = gsap.utils.selector(arrow)

  const drawArrow = () => {
    gsap.to(q("circle, line, polyline"), { duration: 1, drawSVG: "100%" })
  }

  React.useEffect(() => {
    gsap.set(q("circle, line, polyline"), { drawSVG: "0%" })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: layout.current,
          start: "bottom bottom",
        },
      })
      .to(arrow.current, { opacity: 0 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: hero.current,
          start: `bottom+=${(1 / 12) * width}px bottom`,
        },
      })
      .to(arrow.current, { color: "#1E40AE" })
  }, [])

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <Hero drawArrow={drawArrow} />
        <Resume data={data} />
        <Portfolio data={data} />
        <Contact />
      </Layout>
      <svg
        className="fixed w-1/6 lg:w-1/12 bottom-4 right-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        ref={arrow}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          className="stroke-current stroke-2"
          fill="none"
        />
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="80"
          className="stroke-current stroke-2"
          fill="none"
        />
        <polyline
          points="32.5, 62.5 50, 80 67.5, 62.5"
          className="stroke-current stroke-2"
          fill="none"
        />
      </svg>
    </>
  )
}

export default IndexPage
