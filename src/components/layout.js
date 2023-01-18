import React from 'react'

import './global.css' 
import Seo from './seo'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <div className='bg-slate-100'>
        <main>{children}</main>
        </div>
      </>
    )
  }
}

export default Template
