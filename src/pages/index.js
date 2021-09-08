import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from 'gsap'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

const Hero = () => {
  return(
  <div className="flex justify-center items-center bg-blue-500 text-white p-5">
      <div className="bg-gray-700 py-5 px-10 rounded mr-10" style={{fontFamily: 'Source Code Pro'}}>
        <p className="text-yellow-300 mb-0">{'.hero {'}</p>
        <p className="ml-5 mb-0"><span className="text-gray-300">background-color:</span> #3B82F6;</p>
        <p className="ml-5 mb-0 text-blue-300"><span className="text-yellow-300">&</span>{'_header {'}</p>
        <p className="ml-10 mb-0"><span className="text-gray-300">font-size:</span> 3rem;</p>
        <p className="ml-10 mb-0"><span className="text-gray-300">font-family:</span> sans-serif;</p>
        <p className="ml-10 mb-0 text-purple-400"><span className="text-yellow-300">&</span>{'_name {'}</p>
        <p className="ml-14 mb-0"><span className="text-gray-300">text-decoration:</span> none;</p>
        <p className="ml-14 mb-0"><span className="text-gray-300">font-weight:</span> normal;</p>
        <p className="ml-10 mb-0 text-purple-400">{'}'}</p>
        <p className="ml-5 mb-0 text-blue-300">{'}'}</p>
        <p className="text-yellow-300 mb-0">{'}'}</p>
      </div>
      <div className="p-3">
        <h1>Hi, I'm Kiefer.</h1>
        <p>I'm a Web Developer.</p>
      </div>
    </div>
)
}

export default IndexPage
