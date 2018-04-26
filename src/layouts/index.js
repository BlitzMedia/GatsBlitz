import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import { Blitz, Flex, Box } from '../lib/layout'
import colors from '../lib/colors'

import logo from '../things/Blitz.png'

console.log(colors)

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Blitz bg={colors.blitzDorado}>
      <Box textAlign='center'>

        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        {children()}
      </Box>
    </Blitz>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
