import Lottie from 'lottie-react'
import landingMotionJSON from './landing.json'
// import landingMotionJSON from './animation_llyparbi.json'
const LandingLottie = () => {
  return <Lottie animationData={landingMotionJSON} loop={true} />
}

export default LandingLottie
