/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components'
import Navigation from 'components/navigation'
import LoadingSpinner from 'components/common/LoadingSpinner'

import { Modal, ScrollStateBar, Footer, Header } from 'components/common'
import { PropsWithChildren, useEffect, useState } from 'react'

import { useRecoilValue } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'
import { useLoading } from 'hooks/useLoading'

import type { AllPostCategory } from 'types/post'
import useTheme from 'hooks/useTheme'
import { FlexBox } from '../StyledLayout'

interface LayoutPropsType extends PropsWithChildren {
  pageProps: {
    category: AllPostCategory
  }
}
const Layout = ({ children, pageProps: { category } }: LayoutPropsType) => {
  const { toggleTheme } = useTheme()

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
    <FlexBox flexDirection={'column'} width={'100%'}>
      <ScrollStateBar />
      <FlexBox>
        {isModal ? (
          <Modal>
            <Navigation category={category} isModal />
          </Modal>
        ) : (
          <Navigation category={category} />
        )}
        <ChildrenContainer>
          <Header toggle={toggleTheme} />
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
