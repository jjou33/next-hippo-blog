import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const HeroWriteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  /* padding-top: 3rem; */
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`

export const HeroMoveImageContainer = styled.div`
  flex: 1;
  position: relative;
  padding-top: 3rem;
  width: 450px;
  height: 300px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const HeroImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 10rem;
  left: 1rem;
`

export const HeroImageContainer2 = styled.div`
  position: absolute;
  width: 100%;
  height: 13rem;
  left: 10rem;
  top: 5rem;
  border-radius: 1rem;
  overflow: hidden;
`
