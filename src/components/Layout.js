import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../scss/app.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'How fast do you type. Increase your typing speed while racing against others ' },
            { name: 'keywords', content: 'typing, typing game, typing speed' },
          ]}
        />
        <main>
          {children}
        </main>
      </>
    )}
  />
)

export default Layout
