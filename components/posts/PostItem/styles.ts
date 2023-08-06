import styled from '@emotion/styled'
import Image from 'next/image'
export const GridItemContainer = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: var(--color-grey-800);
  /* text-align: center; */

  border-radius: 20px;
`

export const StyledImage = styled(Image)`
  width: 100%;
  overflow: hidden;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
`

export const ContentsWrapper = styled.div`
  padding: 20px;
`

export const TimeStamp = styled.time`
  font-style: italic;
  color: green;
`
