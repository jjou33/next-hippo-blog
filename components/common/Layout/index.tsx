import { Footer } from 'components/common'
import styled from '@emotion/styled'
import { FlexBox } from '../StyledLayout'
import SideBar from 'components/navigation'
const Layout = ({ children, pageProps: { category } }) => {
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
