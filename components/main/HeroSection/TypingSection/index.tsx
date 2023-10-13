import theme from 'styles/theme'

import { Typography } from 'components/common'
import { useTypingTitle } from 'hooks/useTypingTitle'
import { FlexBox } from 'components/common/StyledLayout'

const TYPINGLIST = {
  LIST: ['Typescript', 'Javascript', 'NextJS', 'React', 'HTML'],
}
const TypingSection = () => {
  const currentTitle = useTypingTitle(TYPINGLIST.LIST)
  return (
    <FlexBox alignItems={'center'} justifyContent={'center'} gap={'2rem'}>
      <FlexBox
        flexDirection={'column'}
        padding={'0 1rem'}
        gap={'1rem'}
        width={'100%'}
      >
        <Typography
          variant="h3"
          aggressive="montserratAlternates_Medium_002"
          color={theme.colors.gray_001}
        >
          Favorite Language
        </Typography>
        <Typography
          variant="h3"
          aggressive="montserratAlternates_Medium_002"
          color={theme.colors.primary_005}
        >
          : {currentTitle}
        </Typography>
      </FlexBox>
    </FlexBox>
  )
}

export default TypingSection
