import styled from 'styled-components'
import Link from 'next/link'

import { FlexBox, SubMaxContainer } from 'components/common/StyledLayout'

export const Container = styled.footer`
  display: flex;
  min-height: 180px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_002};
  background-color: ${({ theme }) => theme.colors.gray_000};
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
`

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  height: inherit;
  color: ${({ theme }) => theme.colors.primary_010};
`

export const ChannelWrapper = styled(FlexBox)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
`
