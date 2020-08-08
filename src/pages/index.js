import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <div className="wrapper">
      <div className="content">
        <h1>About {data.site.siteMetadata.title}</h1>


      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `

export default IndexPage
