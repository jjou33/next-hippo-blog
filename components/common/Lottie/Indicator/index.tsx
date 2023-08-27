import Lottie from 'lottie-react'
import indicatorMotionJSON from './indicator.json'

const IndicatorLottie = () => {
  return <Lottie animationData={indicatorMotionJSON} loop={true} />
}

export default IndicatorLottie
