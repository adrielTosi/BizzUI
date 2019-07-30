import React from "react"
import { Link } from "gatsby"

import SEO from "../components/common/seo"
import "bootstrap/dist/css/bootstrap.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/BizzUI/">Go to BizzUI</Link>
  </div>
)

export default IndexPage
