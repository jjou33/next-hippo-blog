import React, { useEffect, useState } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'

import * as S from './styles'

const Modal = ({ children }: { children: React.ReactNode }) => {
  const setMenuState = useSetRecoilState(menuOpenState)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setMenuState(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const state = useRecoilValue<boolean>(menuOpenState)
  const setState = useSetRecoilState(menuOpenState)
  const [innerState, setInnerState] = useState<boolean>(state)
  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setInnerState((oldValue: boolean) => !oldValue)
      setTimeout(() => {
        setState((oldValue: boolean) => !oldValue)
      }, 500)
    }
  }

  return (
    <>
      <S.ModalOverlay visible={state} />
      <S.ModalWrapper onClick={onMaskClick} visible={state}>
        <S.ModalInner className={'modal-inner'} visible={innerState}>
          {children}
        </S.ModalInner>
      </S.ModalWrapper>
    </>
  )
}

export default Modal
