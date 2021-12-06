import * as React from "react"

import Layout from "../components/Layout/Layout"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
