import * as S from './styles'
import Typography from '../Typography'
import DATA from 'constants/data'
import { Divider } from 'components/common/StyledLayout'
import { MainIconSet } from 'public/static/icon'
import theme from 'styles/theme'

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
              variant="span"
              aggressive="body_oneline_002"
              color={theme.color.sub_text_color2}
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
              href={DATA.FOOTER_INFO.GITHUB_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <Typography
                variant="span"
                aggressive="body_oneline_002"
                color={theme.color.sub_text_color2}
              >
                GIT HUB
              </Typography>
            </S.Anchor>
          </S.LinkContentsWrapper>
          <Typography
            variant="span"
            aggressive="body_oneline_002"
            color={theme.color.sub_text_color2}
            margin={'4rem 0 0 0'}
          >
            Copyright 2023 BY HIPPO-DEV
          </Typography>
          <S.ChannelWrapper>
            <S.Anchor
              href={DATA.FOOTER_INFO.GITHUB_LINK}
              target="_blank"
              rel="noreferrer"
              title="Go to My Github"
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
