import { FlexBox } from 'components/common/StyledLayout'
import { getFeaturedPosts } from 'lib/PostUtil'
import HeroSection from './HeroSection'
import PostList from './PostList'

const DUMMY_POSTS = [
  {
    slug: 'next1',
    title: 'next1',
    image: 'next1.jpg',
    excerpt: 'testtesttesttesttesttesttesttest',
    date: '2022-02-10',
  },
  {
    slug: 'next2',
    title: 'next2',
    image: 'next2.jpg',
    excerpt: 'testtesttesttesttesttesttesttest',
    date: '2022-02-10',
  },
  {
    slug: 'next3',
    title: 'next3',
    image: 'next3.jpg',
    excerpt: 'testtesttesttesttesttesttesttest',
    date: '2022-02-10',
  },
  {
    slug: 'next4',
    title: 'next4',
    image: 'next4.jpg',
    excerpt: 'testtesttesttesttesttesttesttest',
    date: '2022-02-10',
  },
]
const MainImageSection = props => {
  return (
    <FlexBox flexDirection="column" alignItems="center">
      <HeroSection />
      <PostList posts={props.posts} />
    </FlexBox>
  )
}

export default MainImageSection
