import { Header, Footer } from 'components/common'
import styled from '@emotion/styled'
const Layout = props => {
  return (
    <>
      <Header />
      <ChildrenContainer>{props.children}</ChildrenContainer>
      <Footer />
    </>
  )
}

const ChildrenContainer = styled.main`
  position: relative;
  min-height: calc(100vh - 258px);
  margin-top: 78px;
`

export default Layout
