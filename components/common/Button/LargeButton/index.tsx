import Typography from 'components/common/Typography'
import { ButtonHTMLAttributes, CSSProperties } from 'react'
import * as S from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  style: CSSProperties
}

const LargeBtn = ({ children, style, ...props }: Props) => {
  const { type, disabled, onClick } = props

  return (
    <S.LargeBtnContainer
      style={style}
      type={type ?? 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      <Typography variant="span" aggressive="button_001">
        {children}
      </Typography>
    </S.LargeBtnContainer>
  )
}

export default LargeBtn
