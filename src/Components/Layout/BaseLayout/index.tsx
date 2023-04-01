import {JSX, Component} from 'solid-js'

import Navbar from '../../Molecules/Navbar'
import Footer from '../../Molecules/Footer'

const BaseLayout: Component<{children?: JSX.Element}> = props => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default BaseLayout
