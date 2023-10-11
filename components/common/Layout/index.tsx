import styled from 'styled-components'
import Navigation from 'components/navigation'
import ScrollBar from '../ScrollStateBar'
import Modal from '../Modal'
import LoadingSpinner from 'components/common/LoadingSpinner'

import { Footer, Header } from 'components/common'
import { FlexBox } from '../StyledLayout'
import { PropsWithChildren, useEffect, useState } from 'react'

import { useRecoilValue } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'
import { useLoading } from 'hooks/useLoading'

import type { AllPostCategory } from 'types/post'
import useTheme from 'hooks/useTheme'

interface LayoutPropsType extends PropsWithChildren {
  pageProps: {
    category: AllPostCategory
  }
}
const Layout = ({ children, pageProps: { category } }: LayoutPropsType) => {
  const { toggleTheme, isDarkMode } = useTheme()

  const isLoading = useLoading()
  const isModal = useRecoilValue(menuOpenState)
  const [isLoadingAnimation, setIsLoadingAnimation] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      setIsLoadingAnimation(false)
    } else {
      setIsLoadingAnimation(true)
    }
  }, [isLoading])

  return (
    <FlexBox flexDirection="column" width="100vw">
      <ScrollBar />
      <FlexBox>
        {isModal ? (
          <Modal>
            <Navigation category={category} isModal={true} />
          </Modal>
        ) : (
          <Navigation category={category} />
        )}
        <ChildrenContainer>
          <Header toggle={toggleTheme} isDarkMode={isDarkMode} />
          <LoadingSpinner isLoading={isLoadingAnimation} />
          {children}
          <Footer />
        </ChildrenContainer>
      </FlexBox>
    </FlexBox>
  )
}

const ChildrenContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
  position: relative;
`

export default Layout
