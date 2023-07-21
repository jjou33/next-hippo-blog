import { StyledLayout, Header, Footer } from 'components/shared'
const Root = props => {
  console.log(props)

  return (
    <StyledLayout.FlexBox flexDirection="column" alignItems="center">
      <StyledLayout.FlexBox
        justifyContent="center"
        gap="78px"
        width="100%"
        margin="0 auto"
        padding="80px 0 0 0"
        background="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F9F9FB 100%)"
      >
        <Header {...props} />
      </StyledLayout.FlexBox>
      <Footer />
    </StyledLayout.FlexBox>
  )
}

export default Root
