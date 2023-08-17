import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostData = postIdentifier => {
  const postSlug = postIdentifier.replace(/\.md$/, '') // removes the file extension
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

export const getAllNavList = () => {
  const allPosts = getAllPosts()

  return allPosts.reduce((list, posts) => {
    if (list[posts.category1depth] === undefined) {
      list[posts.category1depth] = {
        title: posts.category1depth,
        children: [posts.category2depth],
      }
    } else {
      if (
        list[posts.category1depth]['children'] !== undefined &&
        !list[posts.category1depth]['children'].includes(posts.category2depth)
      ) {
        list[posts.category1depth]['children'].push(posts.category2depth)
      }
    }

    return list
  }, {})
}

export const getCategoryPosts = category => {
  const allPost = getAllPosts()

  const categoryPosts = allPost.filter(post => post.category2depth === category)

  return categoryPosts
}

export const getCategoryNames = () => {
  const allPost = getAllPosts()

  const categoryNames = allPost.map(post => post.category2depth)
  // console.log(categoryNames)
  return categoryNames
}
export const getFeaturedPosts = () => {
  const allPosts = getAllPosts()

  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts
}
