import { Typography } from 'components/common'
import NavItem1depth from './NavItem1depth'
import NavItem2depth from './NavItem2depth'
import NavRootTitle from './NavRootTitle'
import theme from 'styles/theme'
import * as S from './styles'
import IconBox from 'components/common/IconBox'
import { NavigationIconSet } from 'public/static/icon'
import { FlexBox } from 'components/common/StyledLayout'

const NavigationSection = ({ navList }) => {
  const { result, count } = navList

  return (
    <S.NavigationContainer>
      <NavRootTitle />
      <S.NavigationGrid>
        {Object.entries(result).map(([rootCategory, category1depthObj]) => {
          return (
            <S.RootItem key={rootCategory}>
              <FlexBox alignItems="center">
                <IconBox width="32px" height="32px">
                  {NavigationIconSet['Glass'].icon()}
                </IconBox>
                <Typography
                  variant="span"
                  aggressive="headline_oneline_006"
                  color={theme.colors.gray_004}
                >
                  {rootCategory}
                </Typography>
              </FlexBox>
              {Object.entries(category1depthObj).map(
                ([category1depth, category2depth]) => {
                  return (
                    <NavItem1depth
                      item={category1depth}
                      count={category2depth.length}
                      key={category1depth}
                    >
                      <NavItem2depth
                        item={category1depth}
                        item2={category2depth}
                        count={count}
                      />
                    </NavItem1depth>
                  )
                },
              )}
            </S.RootItem>
          )
        })}
      </S.NavigationGrid>
    </S.NavigationContainer>
  )
}

export default NavigationSection
