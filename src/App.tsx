import type { Component } from 'solid-js';

import BaseLayout from './Components/Layout/BaseLayout'


const App: Component = () => {
  return (
    <BaseLayout>
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
    </BaseLayout>
  );
};

export default App;
