import { getClassName } from 'hooks/useNestedHeadings'
import theme from 'styles/theme'
import { Typography } from 'components/common'

interface NestedHeadingType {
  id: string
  text: string
  level: number
}
const PostTocItems = (headings: NestedHeadingType) => {
  return (
    <a
      href={`#${headings.id}`}
      className={getClassName(headings.level)}
      onClick={e => {
        e.preventDefault()
        document.querySelector(`#${headings.id}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }}
    >
      <Typography
        variant="span"
        aggressive="body_oneline_002"
        color={theme.color.text_001}
      >
        {headings.text}
      </Typography>
    </a>
  )
}

export default PostTocItems
