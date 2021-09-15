import * as React from "react"
import { gsap } from "gsap"

const Portfolio = data => {
  const projects = data.data.allStrapiProjects.edges

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
  })

  return (
    <div className="max-w-4xl mx-auto p-5 mt-5 lg:mt-10" ref={portfolio}>
      <h2 className="px-5 text-3xl mb-10 lg:mb-20 lg:text-5xl flex items-center">
        Portfolio
        <span className="flex-1 border-b-2 border-blue-500 ml-5 lg:ml-10"></span>
      </h2>
      {projects.map(project => (
        <div className="mb-10 md:px-10 lg:px-0" key={project.node["Name"]}>
          <h3>{project.node["Name"]}</h3>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-wrap mb-3">
                {project.node["Technologies"].map(tech => (
                  <div
                    className="bg-blue-600 rounded-full px-3 py-1 mr-1 mb-2 text-xs font-bold text-white"
                    key={tech["Technology"]}
                  >
                    {tech["Technology"]}
                  </div>
                ))}
              </div>
              <p className="text-sm lg:text-base">
                {project.node["Description"]}
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-5 lg:-mt-10">
              <a href={project.node["URL"]}>
                <img
                  alt={project.node["Name"]}
                  src={`${process.env.GATSBY_BASE_URL}${project.node["Photo"]["localFile"]["publicURL"]}`}
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
