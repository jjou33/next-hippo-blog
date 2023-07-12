import styled from '@emotion/styled'
import { css } from '@emotion/react'
interface Temp {
  proper: number
}
export const SampleContainer = styled.div`
  background-color: white;
  ${(props: Temp) =>
    props.proper
      ? css`
          color: red;
        `
      : ''}
`
