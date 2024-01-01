import styled from 'styled-components'
import Link from 'next/link'

import { FlexBox, SubMaxContainer } from 'components/common/StyledLayout'
import theme from 'styles/theme'

export const Container = styled.footer`
  display: flex;
  min-height: 180px;
  background-color: ${theme.color.background_002};
  z-index: 1;
`

export const SubContainer = styled(SubMaxContainer)`
  padding: 0 1rem;
`
export const InnerWrapper = styled(FlexBox)`
  position: relative;
  padding-top: 24px;
`
export const LinkContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: 14px;
  flex-wrap: wrap;
`

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  height: inherit;
`

export const ChannelWrapper = styled(FlexBox)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
`
