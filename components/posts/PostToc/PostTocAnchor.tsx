import { getClassName } from 'hooks/useNestedHeadings'
import theme from 'styles/theme'
import { Typography } from 'components/common'

interface NestedHeadingType {
  id: string
  text: string
  level: number
}
const PostTocItems = ({ id, level, text }: NestedHeadingType) => {
  return (
    <a
      href={`#${id}`}
      className={getClassName(level)}
      onClick={e => {
        e.preventDefault()
        document.querySelector(`#${id}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }}
    >
      <Typography
        variant={'span'}
        aggressive={'body_oneline_002'}
        color={theme.color.text_001}
      >
        {text}
      </Typography>
    </a>
  )
}

export default PostTocItems
