import styled from 'styled-components'
import SideBar from 'components/navigation'

import { Footer } from 'components/common'
import { FlexBox } from '../StyledLayout'

import { PropsWithChildren } from 'react'
import type { AllPostCategory } from 'types/post'

interface LayoutPropsType extends PropsWithChildren {
  pageProps: {
    category: AllPostCategory
  }
}
const Layout = ({ children, pageProps: { category } }: LayoutPropsType) => {
  return (
    <FlexBox flexDirection="column" width="100vw">
      <FlexBox>
        <SideBar category={category} />
        <ChildrenContainer>
          {children}
          <Footer />
        </ChildrenContainer>
      </FlexBox>
    </FlexBox>
  )
}

const ChildrenContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
`

export default Layout
