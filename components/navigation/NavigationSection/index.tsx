import * as S from './styles'

import theme from 'styles/theme'
import IconBox from 'components/common/IconBox'
import NavMainCategory from './NavMainCategory'
import NavSubCategory from './NavSubCategory'
import NavRootTitle from './NavRootTitle'

import { FlexBox } from 'components/common/StyledLayout'
import { Typography } from 'components/common'
import { NavigationIconSet } from 'public/static/icon'

import type { AllPostCategory } from 'types/post'

const NavigationSection = ({ category }: { category: AllPostCategory }) => {
  return (
    <S.NavigationContainer>
      <S.NavigationWrapper>
        <NavRootTitle />
        <S.NavigationGrid>
          {category ? (
            Object.entries(category.result).map(
              ([rootCategory, mainCategory]) => {
                return (
                  <S.RootItemContainer key={rootCategory}>
                    <FlexBox alignItems="center">
                      <IconBox width="32px" height="32px">
                        {NavigationIconSet['Glass'].icon()}
                      </IconBox>
                      <Typography
                        variant="span"
                        aggressive="montserratAlternates_medium_001"
                        color={theme.colors.gray_004}
                      >
                        {rootCategory}
                      </Typography>
                    </FlexBox>
                    {Object.entries(mainCategory).map(
                      ([mainCategoryItem, subCategoryItems]) => {
                        console.log(mainCategoryItem)
                        return (
                          <NavMainCategory
                            item={mainCategoryItem}
                            count={subCategoryItems.length}
                            key={mainCategoryItem}
                          >
                            <NavSubCategory
                              items={subCategoryItems}
                              count={category.count}
                            />
                          </NavMainCategory>
                        )
                      },
                    )}
                  </S.RootItemContainer>
                )
              },
            )
          ) : (
            // TODO : null 일 경우 Skeleton UI 적용
            <></>
          )}
        </S.NavigationGrid>
      </S.NavigationWrapper>
    </S.NavigationContainer>
  )
}

export default NavigationSection
