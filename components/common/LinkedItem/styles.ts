import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

const LinkBoardKeyframe = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
export const LinkBoardStyle = css`
  background: white;
  position: relative;
  border-radius: 3px;

  ::after {
    content: '';
    position: absolute;
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    height: calc(100% + 3px * 2);
    width: calc(100% + 3px * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * 3px);
    z-index: -1;
    animation: ${LinkBoardKeyframe} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${LinkBoardStyle}
`
export const LinkWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 20px 20px 20px;

  a {
    color: white;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    text-decoration: none;
    background-color: #ffa12b;
    display: block;
    position: relative;
    padding: 5px 10px;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);

    -webkit-box-shadow:
      inset 0 1px 0 #ffe5c4,
      0 10px 0 #915100;
    -moz-box-shadow:
      inset 0 1px 0 #ffe5c4,
      0 10px 0 #915100;
    box-shadow:
      inset 0 1px 0 #ffe5c4,
      0 10px 0 #915100;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    :hover {
      top: 10px;
      background-color: #f78900;

      -webkit-box-shadow:
        inset 0 1px 0 #ffe5c4,
        inset 0 -3px 0 #915100;
      -moz-box-shadow:
        inset 0 1px 0 #ffe5c4,
        inset 0 -3pxpx 0 #915100;
      box-shadow:
        inset 0 1px 0 #ffe5c4,
        inset 0 -3px 0 #915100;
    }
  }

  ::after {
    content: '';
    height: 100%;
    width: 110%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -3px;
    z-index: -1;
    background-color: #2b1800;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
`
