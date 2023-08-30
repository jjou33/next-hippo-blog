import React from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'

import * as S from './styles'

interface DimmedModalPropsType {
  maskClosable?: boolean
  children: React.ReactNode
}
const Modal = ({ children }: DimmedModalPropsType) => {
  const state = useRecoilValue<boolean>(menuOpenState)
  const setState = useSetRecoilState(menuOpenState)

  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setState((oldValue: boolean) => !oldValue)
    }
  }

  return (
    <>
      <S.ModalOverlay visible={state} />
      <S.ModalWrapper onClick={onMaskClick} visible={state}>
        <S.ModalInner className="modal-inner">{children}</S.ModalInner>
      </S.ModalWrapper>
    </>
  )
}

export default Modal
