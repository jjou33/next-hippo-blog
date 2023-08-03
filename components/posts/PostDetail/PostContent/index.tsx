import ReactMarkdown from 'react-markdown'

import * as S from './styles'
import PostHeader from '../PostHeader'

const DUMMY_POST = {
  slug: 'next1',
  title: 'next1',
  image: 'next1.jpg',
  date: '2022-02-10',
  content: '# HELLO HIPPO DEV',
}
const PostContent = props => {
  const imagePath = `/static/images/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return (
    <S.ContentsContainer>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </S.ContentsContainer>
  )
}

export default PostContent
