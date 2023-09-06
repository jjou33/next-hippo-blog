import theme from 'styles/theme'
import Typography from '../Typography'
import * as S from './styles'

import { Divider } from 'components/common/StyledLayout'
import { MainIconSet } from 'public/static/icon'

const REFERENCE_LINK = {
  GITHUB: 'https://github.com/jjou33',
} as const

const Footer = () => {
  return (
    <S.Container>
      <S.SubContainer>
        <S.InnerWrapper
          display={'flex'}
          flexDirection={'column'}
          width={'100%'}
        >
          <S.LinkContentsWrapper>
            <Typography
              variant="h4"
              aggressive="body_oneline_003"
              color={theme.colors.gray_004}
            >
              zanda33@naver.com
            </Typography>
            <Divider
              direction="vertical"
              width="18px"
              height="1px"
              margin="0 10px 0 10px"
              color="#D9D9D9"
            />
            <S.Anchor
              href={REFERENCE_LINK.GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              <Typography
                variant="span"
                aggressive="body_oneline_003"
                color={theme.colors.gray_006}
              >
                GIT HUB
              </Typography>
            </S.Anchor>
          </S.LinkContentsWrapper>
          <Typography
            variant="h4"
            aggressive="body_oneline_003"
            color={theme.colors.gray_004}
            margin={'4rem 0 0 0'}
          >
            Copyright 2023 BY HIPPO-DEV
          </Typography>
          <S.ChannelWrapper>
            <S.Anchor
              href={REFERENCE_LINK.GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              {MainIconSet['Git'].icon()}
            </S.Anchor>
          </S.ChannelWrapper>
        </S.InnerWrapper>
      </S.SubContainer>
    </S.Container>
  )
}

export default Footer
