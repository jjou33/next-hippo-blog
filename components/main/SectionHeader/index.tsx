import { Typography } from 'components/common'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import { themedPalette } from 'styles/themeVariables'

const SectionHeader = ({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) => {
  return (
    <FlexBox flexDirection="column">
      <Typography
        variant="h2"
        aggressive="headline_medium_002"
        color={themedPalette.text_color}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        aggressive="body_oneline_003"
        color={themedPalette.sub_text_color2}
        margin="1rem 0 0 0"
      >
        {subTitle}
      </Typography>
      <Divider
        direction="horizontal"
        width="100%"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
    </FlexBox>
  )
}

export default SectionHeader
