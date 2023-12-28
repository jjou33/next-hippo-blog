import { Typography } from 'components/common'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import theme from 'styles/theme'

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
        color={theme.color.text_001}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        aggressive="body_oneline_bold_medium"
        color={theme.color.primary_005}
        margin="1rem 0 0 0"
      >
        {subTitle}
      </Typography>
      <Divider
        direction="horizontal"
        width="100%"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.color.divider_002}
      />
    </FlexBox>
  )
}

export default SectionHeader
