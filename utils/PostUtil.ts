import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { PostData, AllPostCategory } from 'types/post'
const postsDirectory = path.join(process.cwd(), 'posts')
const imageDirectory = path.join(process.cwd(), 'public/static/images')

const readFilesRecursively = directoryPath => {
  const entries = fs.readdirSync(directoryPath)
  const paths = []

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry)
    const stat = fs.statSync(entryPath)

    if (stat.isDirectory()) {
      // 디렉토리인 경우 재귀적으로 읽어옵니다.
      const subPaths = readFilesRecursively(entryPath)
      paths.push(...subPaths)
    } else {
      // 파일인 경우 상위 폴더명과 파일 이름을 조합하여 배열에 추가합니다.
      const parentDirectory = path.basename(directoryPath)
      paths.push(`${parentDirectory}/${entry}`)
    }
  }

  return paths
}

/**
 * @description Image 디렉토리 내 파일을 읽어 온다.
 */

export const getImageFileNames = () => {
  return readFilesRecursively(imageDirectory)
}
/**
 * @description 현재 디렉토리에 있는 PostFile 을 읽어 온다.
 */

export const getPostsFiles = () => {
  return readFilesRecursively(postsDirectory)
}

/**
 * @description 특정 PostDetail 파일 Generation 을 위한 데이터 Fetch 함수
 */

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, '')
  const filePath = path.join(postsDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postData: PostData = {
    slug: postSlug.split('/')[1],
    ...data,
    content,
  }
  return postData
}

export const getAllPosts = (): PostData[] => {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile)
  })

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  )

  return sortedPosts
}

export const makeKeywordSet = (keywordSet, keywords): [] => {
  const result = keywords.filter(keyword => !keywordSet.includes(keyword))

  // console.log(result)
  return result
}
/**
 * @description Navigation 을 위한 rootCategory, CategoryDepth 에 대한 정보를 통한 객체 생성
 */

export const getAllPostsCategory = (): AllPostCategory => {
  const result = {}
  const count = {}
  const keywordSet = {}
  let categoryCount = 0
  let allPostCount = 0
  getAllPosts().forEach(
    ({ rootCategory, category1depth, category2depth, keywords }) => {
      result[rootCategory] = result[rootCategory] || {}
      result[rootCategory][category1depth] =
        result[rootCategory][category1depth] || []

      if (!result[rootCategory][category1depth].includes(category2depth)) {
        result[rootCategory][category1depth].push(category2depth)
        count[category2depth] = 1
        categoryCount++
      } else {
        count[category2depth]++
      }
      allPostCount++

      if (!keywordSet[category2depth]) {
        keywordSet[category2depth] = []
      }

      keywordSet[category2depth] = [
        ...keywordSet[category2depth],
        ...makeKeywordSet(keywordSet[category2depth], keywords),
      ]
    },
  )

  return { result, count, categoryCount, allPostCount, keywordSet }
}

/**
 * @description 2depth(PostDetail) SSG 를 위한 StaticPath 관련 정보
 */

export const getSlugByParams = (): Array<string>[] => {
  const slugList = getAllPosts().map(posts => {
    return [posts.category2depth, posts.slug]
  })

  return slugList
}

/**
 * @description 1depth(PostList) SSG 를 위한 StaticProps 관련 정보
 */

export const getCategoryPosts = (category: string): PostData[] => {
  const categoryPosts = getAllPosts().filter(
    post => post.category2depth === category,
  )

  return categoryPosts
}

export const getFeaturedPosts = () => {
  const featuredPosts = getAllPosts().filter(post => post.isFeatured)

  return featuredPosts
}
