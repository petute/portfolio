import {Component} from 'solid-js'

import {Button} from '@kobalte/core'

import neobrutalism from '../../Styles/neobrutalism'
import blob from './HeroBlob.png'

const Hero: Component = () => {
  return (
    <>
      <div class="my-20 flex w-full flex-col items-center justify-center">
        <div
          class={neobrutalism({
            font: 'important',
            class: [
              'w-4/5',
              'bg-neobrutalism-red',
              'px-2',
              'py-4',
              'text-center',
              'text-3xl',
              'lg:w-3/5',
              'lg:px-4',
              'lg:py-8',
              'lg:text-8xl'
            ]
          })}
        >
          Modern Solutions for the Modern Web
        </div>
        <div class="relative">
          <img
            src={blob}
            class="relative left-0 -top-16"
          />
        </div>
        <Button.Root
          class={neobrutalism({
            font: 'important',
            class: [
              '-mt-16',
              'w-3/5',
              'bg-neobrutalism-yellow',
              'p-2',
              'text-lg'
            ]
          })}
        >
          Hire me!
        </Button.Root>
        <Button.Root
          class={neobrutalism({
            font: 'important',
            class: ['mt-4', 'w-3/5', 'bg-neobrutalism-red', 'p-2', 'text-lg']
          })}
        >
          Talk to me about a Project
        </Button.Root>
      </div>
    </>
  )
}

export default Hero
