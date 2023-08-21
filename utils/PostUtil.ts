import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * @description 현재 디렉토리에 있는 PostFile 을 읽어 온다.
 */
export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory)
}

/**
 * @description 모든 PostFile 에 대한 정보를 가진 Array 리턴
 */
export const getAllPosts = () => {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile)
  })

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  )

  return sortedPosts
}

/**
 * @description Navigation 을 위한 rootCategory, CategoryDepth 에 대한 정보를 통한 객체 생성
 */

export const getAllPostsCategory = () => {
  const result = {}
  const count = {}

  getAllPosts().forEach(({ rootCategory, category1depth, category2depth }) => {
    if (!result[rootCategory]) {
      result[rootCategory] = {}
    }

    if (!result[rootCategory][category1depth]) {
      result[rootCategory][category1depth] = []
    }

    if (!result[rootCategory][category1depth].includes(category2depth)) {
      // 2depth 배열에 동일 카테고리 존재 하지 않을 경우
      result[rootCategory][category1depth].push(category2depth)
      // count Object 에 값 추가
      count[category2depth] = 1
    } else {
      // 2depth 배열에 동일 카테고리 존재 할 경우
      count[category2depth]++
    }
  })

  return { result, count }
}

/**
 * @description 특정 PostDetail 파일 Generation 을 위한 데이터 Fetch 함수
 */

export const getPostData = postIdentifier => {
  const postSlug = postIdentifier.replace(/\.md$/, '')
  const filePath = path.join(postsDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  interface PostData {
    slug: string
    content: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
  const postData: PostData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

/**
 * @description 2depth(PostDetail) SSG 를 위한 StaticPath 관련 정보
 */

export const getSlugByParams = () => {
  const slugList = getAllPosts().map(posts => [
    posts.category2depth,
    posts.slug,
  ])

  return slugList
}

/**
 * @description 1depth(PostList) SSG 를 위한 StaticProps 관련 정보
 */

export const getCategoryPosts = category => {
  const allPost = getAllPosts()

  const categoryPosts = allPost.filter(post => post.category2depth === category)

  return categoryPosts
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts()

  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts
}
