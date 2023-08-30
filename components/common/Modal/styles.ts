import styled from 'styled-components'

export const ModalWrapper = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

export const ModalOverlay = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

export const ModalInner = styled.div`
  position: relative;
  top: 50px;
`

export const CloseButton = styled.div`
  width: 20px;
  height: 10px;
  border-radius: 10px;
`
