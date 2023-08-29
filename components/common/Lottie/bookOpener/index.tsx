import Lottie from 'lottie-react'
import bookOpenMotionJSON from './bookOpener.json'

const bookOpenerLottie = () => {
  return <Lottie animationData={bookOpenMotionJSON} loop={true} />
}

export default bookOpenerLottie
