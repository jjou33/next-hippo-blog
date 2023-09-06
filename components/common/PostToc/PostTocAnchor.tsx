import { getClassName } from 'hooks/useNestedHeadings'

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
      {headings.text}
    </a>
  )
}

export default PostTocItems
