import * as React from "react"
import { gsap } from "gsap"

const Resume = (data, expandCursor, contractCursor) => {
  const [activeResumeItem, setActiveResumeItem] = React.useState("About")
  const resumeItems = ["About", "Skills", "Work", "Education"]

  const skills = data.data.allWpPage.edges[0].node.homepageFields.resume.skills
  const experience =
    data.data.allWpPage.edges[0].node.homepageFields.resume.work
  const education =
    data.data.allWpPage.edges[0].node.homepageFields.resume.education
  const about = data.data.allWpPage.edges[0].node.homepageFields.resume.aboutMe
  const parsedSkills = {}

  skills.forEach(skill => {
    var cat = skill.skillCategories.nodes[0].name
    if (parsedSkills[cat]) {
      parsedSkills[cat].push(skill.title)
    } else {
      parsedSkills[cat] = [skill.title]
    }
  })

  let resumeSwitch

  if (activeResumeItem === "About") {
    resumeSwitch = (
      <p className="text-sm lg:text-base md:px-10 lg:px-0 lg:ml-24">{about}</p>
    )
  } else if (activeResumeItem === "Skills") {
    resumeSwitch = (
      <div className="flex flex-row flex-wrap justify-between md:px-10 lg:px-0 lg:ml-24">
        {Object.keys(parsedSkills).map(key => (
          <div className="mr-5 mb-5 lg:mr-10" key={key}>
            <h3 className="border-b-2 border-blue-600 pb-1 mb-3 text-xl lg:text-2xl">
              {key}
            </h3>
            <ul className="m-0">
              {parsedSkills[key].map(skill => (
                <li className="m-0 text-sm lg:text-base" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  } else if (activeResumeItem === "Work") {
    resumeSwitch = (
      <div className="flex flex-col md:px-10 lg:px-0 lg:ml-24">
        {experience.map(item => (
          <div className="mb-5" key={item.title}>
            <h3 className="mb-1">{item.title}</h3>
            <h4 className="text-sm lg:text-base text-blue-500 mb-3">
              {item.EducationFields.date}
            </h4>
            <p className="text-sm lg:text-base">
              {item.EducationFields.description}
            </p>
          </div>
        ))}
      </div>
    )
  } else {
    resumeSwitch = (
      <div className="flex flex-col md:px-10 lg:px-0 lg:ml-24">
        {education.map(item => (
          <div className="mb-5" key={item.title}>
            <h3 className="mb-1">{item.title}</h3>
            <h4 className="text-sm lg:text-base text-blue-500 mb-3">
              {item.EducationFields.date}
            </h4>
            <p className="text-sm lg:text-base">
              {item.EducationFields.description}
            </p>
          </div>
        ))}
      </div>
    )
  }

  const resume = React.useRef()

  React.useEffect(() => {
    gsap.set(resume.current, { opacity: 0, x: -50 })

    var resumeAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: resume.current,
          start: "top center",
        },
      })
      .to(resume.current, {
        opacity: 1,
        x: 0,
        onComplete: () => {
          resumeAnimation.kill()
          resumeAnimation = null
        },
      })
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-5 mt-5 lg:mt-10" ref={resume}>
      <h2 className="px-5 text-3xl mb-10 lg:mb-20 lg:text-5xl flex items-center">
        Resume
        <span className="flex-1 border-b-2 border-blue-500 ml-5 lg:ml-10"></span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-start">
        <ul className="flex flex-row flex-no-wrap lg:flex-col m-0 mb-5 w-full lg:w-auto">
          {resumeItems.map(item => (
            <li
              key={item}
              className={`m-0 px-2 py-2 text-sm cursor-pointer font-bold border-b-2 lg:border-l-2 lg:border-b-0 w-1/4 text-center lg:w-auto lg:text-base lg:text-left lg:px-5 lg:py-3 ${
                item === activeResumeItem ? "border-blue-600 text-blue-600" : ""
              }`}
              onClick={() => setActiveResumeItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        {resumeSwitch}
      </div>
    </div>
  )
}

export default Resume
