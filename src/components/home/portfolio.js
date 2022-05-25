import * as React from "react"
import { gsap } from "gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioItem = ({ project }) => {
  const image = getImage(
    project.featuredImage?.node?.localFile.childrenImageSharp[0].gatsbyImageData
  )

  return (
    <div className="mb-10 md:px-10 lg:px-0" key={project.ProjectFields.order}>
      <h3>{project.title}</h3>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-wrap mb-3">
            {project.ProjectFields.skills.map(skill => (
              <div
                className="bg-blue-600 rounded-full px-3 py-1 mr-1 mb-2 text-xs font-bold text-white"
                key={skill.title}
              >
                {skill.title}
              </div>
            ))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
        </div>
        <div className="w-full lg:w-1/2 px-5 mb-5 lg:-mt-10 lg:mb-0">
          <a href={project.ProjectFields.url} target="_blank" rel="noreferrer">
            <GatsbyImage
              className="border border-gray-200"
              alt={project.title}
              image={image}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

const Portfolio = data => {
  const projects = data.data.allWpProject.edges

  const portfolio = React.useRef()

  React.useEffect(() => {
    gsap.set(portfolio.current, { opacity: 0, x: -50 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: portfolio.current,
          start: "top center",
        },
      })
      .to(portfolio.current, { opacity: 1, x: 0 })
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-5 mt-5 lg:mt-10" ref={portfolio}>
      <h2 className="px-5 text-3xl mb-10 lg:mb-20 lg:text-5xl flex items-center">
        Portfolio
        <span className="flex-1 border-b-2 border-blue-500 ml-5 lg:ml-10"></span>
      </h2>
      {projects.map(project => (
        <PortfolioItem project={project.node} key={project.node.title} />
      ))}
    </div>
  )
}

export default Portfolio
