import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
   const { allMarkdownRemark } = data
   const { edges } = allMarkdownRemark
   // console.log(edges)

   return (
      <Layout>
         <SEO title="Home">
            <div>
               {edges.map(item => {
                  const { node } = item
                  const { frontmatter } = node

                  return (
                  <Link to={`/${node.frontmatter.path}`} key={node.frontmatter.path}>
                     <h1 >{node.frontmatter.title}</h1>
                  </Link>
               )
               })}
            </div>
            <Link to="/page-2/">Go to page 2</Link>
         </SEO>
      </Layout>
   )
}

export const pageQuery = graphql`
{
   allMarkdownRemark {
      edges {
         node {
         html
         frontmatter {
            title
            date(formatString: "DD/MM")
            path
         }
         }
      }
   }
}
`;

export default IndexPage
