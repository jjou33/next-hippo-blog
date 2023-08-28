import { useEffect, useState } from 'react'

export const useScrollStateBar = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll =
        document.body.scrollTop || document.documentElement.scrollTop

      const winddowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scroll = (totalScroll / winddowHeight) * 100

      setScroll(scroll)
    }

    window.addEventListener('scroll', progressBarHandler)

    return () => window.removeEventListener('scroll', progressBarHandler)
  })

  return scroll
}
