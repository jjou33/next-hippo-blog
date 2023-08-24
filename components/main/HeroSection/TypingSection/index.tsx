import * as S from './styles'

import theme from 'styles/theme'

import { Divider, FlexBox } from 'components/common/StyledLayout'
import { Typography } from 'components/common'
import { useTypingTitle } from 'hooks/useTypingTitle'

const TypingSection = () => {
  const myInfoList = ['Favorite Language', 'Hobby']
  const currentTitle = useTypingTitle([
    'Typescript',
    'Javascript',
    'NextJS',
    'React',
  ])
  return (
    <FlexBox gap="2rem">
      <S.HeroWriteContainer>
        {myInfoList.map(title => (
          <Typography
            variant="h3"
            aggressive="montserratAlternates_Bold_002"
            color={theme.colors.gray_001}
            key={title}
          >
            {title}
            <Divider
              direction="horizontal"
              width="100%"
              height="1px"
              margin="10px 0 5px 0"
              color={theme.colors.gray_002}
            />
            : {currentTitle}
          </Typography>
        ))}
      </S.HeroWriteContainer>
      <S.HeroWriteContainer>
        {myInfoList.map(title => (
          <Typography
            variant="h3"
            aggressive="montserratAlternates_Bold_002"
            color={theme.colors.gray_001}
            key={title}
          >
            {title}
            <Divider
              direction="horizontal"
              width="100%"
              height="1px"
              margin="10px 0 5px 0"
              color={theme.colors.gray_002}
            />
            : {currentTitle}
          </Typography>
        ))}
      </S.HeroWriteContainer>
    </FlexBox>
  )
}

export default TypingSection
