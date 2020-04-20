import React from 'react'

import Layout from '../components/Layout'
import Quotes from '../components/quotes'
import TypeGame from '../components/typeGame'

const IndexPage = () => {
  return (
    <Layout>
      <div className="section__game">
        <div className="section__game-left">
          <Quotes />
        </div>
        <div className="section__game-right">
          <TypeGame />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
