import React from 'react'
import * as S from './styles'

import PostTocAnchor from './PostTocAnchor'

import { useHeadingDataSet, getClassName } from 'hooks/useNestedHeadings'

interface NestedHeadingType {
  id: string
  text: string
  level: number
  items: { id: string; text: string; level: number }[]
}
interface NestedListType extends NestedHeadingType {
  items: NestedHeadingType[]
}

const PostToc = () => {
  const [nestedHeadingList] = useHeadingDataSet()

  return (
    <S.PostTocContainer>
      <S.PostTocTitle>📚 목차</S.PostTocTitle>
      <S.PostTocWrapper>
        {nestedHeadingList.map((headings: NestedListType) => (
          <S.PostTocItem key={headings.id}>
            <PostTocAnchor {...headings} />
            {headings.items.length > 0 ? (
              <S.PostTocWrapper>
                {headings.items.map((headingItems: NestedHeadingType) => (
                  <S.PostTocItem
                    key={headingItems.id}
                    className={getClassName(headingItems.level)}
                  >
                    <PostTocAnchor {...headingItems} />
                  </S.PostTocItem>
                ))}
              </S.PostTocWrapper>
            ) : (
              <></>
            )}
          </S.PostTocItem>
        ))}
      </S.PostTocWrapper>
    </S.PostTocContainer>
  )
}

export default PostToc
