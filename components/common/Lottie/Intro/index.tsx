import Lottie from 'lottie-react'
import introMotionJSON from './intro.json'

const IntroLottie = () => {
  return <Lottie animationData={introMotionJSON} loop={true} />
}

export default IntroLottie
