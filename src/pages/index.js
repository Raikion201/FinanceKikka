import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Cat from '../components/cat'

const RootIndex = ({ data }) => {
  const hero = get(data, 'contentfulBlogPost')
  return (
    <Layout>
      <Hero
        image={hero.heroImage.gatsbyImage}
        title={hero.title}
        description={hero.description.raw}
      />
      <Footer />
      <Cat />
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  {
    contentfulBlogPost {
      heroImage {
        gatsbyImage(height: 1000, placeholder: BLURRED)
      }
      description {
        raw
      }
      title
    }
  }
`
