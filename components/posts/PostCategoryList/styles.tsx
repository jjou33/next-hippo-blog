import { FlexBox } from 'components/common/StyledLayout'
import styled from 'styled-components'

export const PostCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100vh;
  background: ${({ theme }) => theme.color.background_001};
  z-index: 1;
`

export const TextBoxContainer = styled(FlexBox)`
  h2 {
    font-size: 2rem;
  }
`

export const PostListContainer = styled.div`
  @media screen and (min-width: 1000px) {
    width: 960px;
    margin: 0 auto;
  }
`
export const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const AllPostContainer = styled.section`
  margin: 5rem auto 0;
  min-height: calc(100vh - 258px);
  padding: 0 2rem;
  @media screen and (min-width: 1000px) {
    width: 960px;
    margin: 9rem auto;
  }
`

export const CustomDivider = styled.div`
  position: relative;
  margin: 2rem auto 3rem;
  height: 1px;
  width: 80%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: ${({ theme }) => theme.color.divider_001};
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -9px;
    left: calc(50% - 9px);
    width: 18px;
    height: 18px;
    background-color: ${({ theme }) => theme.color.primary_008};
    border: 1px solid rgb(48, 49, 51);
    border-radius: 50%;
    box-shadow:
      inset 0 0 0 2px white,
      0 0 0 4px white;
  }
`
