/**
 * @description PostData Properties Type
 */

export interface PostData {
  slug: string
  content: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // [key: string]: any
  category1depth: string
  category2depth: string
  date: Date
  excerpt: string
  image: string
  isFeatured: boolean
  keywords: string[]
  rootCategory: string
  title: string
}

/**
 * @description AllPostData Retrun Type
 */

export interface AllPostCategory {
  result: {
    [key: string]: {
      [key: string]: string[]
    }
  }
  count: {
    [key: string]: number
  }
  categoryCount: number
  allPostCount: number
}
