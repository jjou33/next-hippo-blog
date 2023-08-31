import Lottie from 'lottie-react'
import FireCrackerDynamicMotionJSON from './FireCrackerDynamic.json'
import FireCrackerStaticJSON from './FireCrackerStatic.json'

export const FireCrackerDynamicLottie = () => {
  return <Lottie animationData={FireCrackerDynamicMotionJSON} loop={true} />
}

export const FireCrackerStaticLottie = () => {
  return <Lottie animationData={FireCrackerStaticJSON} loop={true} />
}
