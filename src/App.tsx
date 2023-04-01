import type {Component} from 'solid-js'

import BaseLayout from './Components/Layout/BaseLayout'
import HeroNeobrutalism from './Components/Organisms/HeroNeobrutalism'

const App: Component = () => {
  return (
    <BaseLayout>
      <HeroNeobrutalism />
    </BaseLayout>
  )
}

export default App
