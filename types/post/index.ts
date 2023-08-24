/**
 * @description PostData Properties Type
 */

export interface PostData {
  slug: string
  content: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
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
}
