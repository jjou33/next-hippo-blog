import { Header, Footer } from 'components/common'
import styled from '@emotion/styled'
import { FlexBox } from '../StyledLayout'
const Layout = props => {
  return (
    <FlexBox flexDirection="column" width="100vw">
      <Header />
      <ChildrenContainer>{props.children}</ChildrenContainer>
      <Footer />
    </FlexBox>
  )
}

const ChildrenContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* width: 100vw; */
  /* margin: 0 auto; */
`

export default Layout
