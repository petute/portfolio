import { cva, VariantProps } from 'cva'

type NeobrutalismVariantProps = VariantProps<typeof neobrutalism>

const neobrutalism = cva(
  ['shadow-neobrutalism', 'border-4', 'border-black', 'radius-m', 'rounded'],
  {
    variants: {
      font: {
        important: ['underline', 'decoration-2', 'font-semibold']
      }
    }
  }
)


export default (props: NeobrutalismVariantProps) => neobrutalism(props)
