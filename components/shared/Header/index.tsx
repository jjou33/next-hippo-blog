import React from 'react'
import * as S from './styles'

const Header = ({ toggleDarkMode, isDarkMode }) => {
  console.log(isDarkMode, toggleDarkMode)
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderItemTitle>HIPPO DEV</S.HeaderItemTitle>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch To Light Mode' : 'Switch to Dark Mode'}
        </button>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  )
}

export default Header
