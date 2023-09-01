import { useEffect, useRef, useState } from 'react'

export const useInfiniteScroll = () => {
  const [isInViewport, setIsInViewport] = useState(false)
  const ref = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInViewport(true)
        } else {
          setIsInViewport(false)
        }
      })
    }

    const options = { root: null, rootMargin: '0px', threshold: 0 }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isInViewport }
}
