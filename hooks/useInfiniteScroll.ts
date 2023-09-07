import { useEffect, useRef, useState } from 'react'

export const useInfiniteScroll = (delay: number = 0) => {
  const [isInViewport, setIsInViewport] = useState(false)
  const ref = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInViewport(true)
            observer.unobserve(entry.target)
          }, delay)
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
  }, [delay])

  return { ref, isInViewport }
}
