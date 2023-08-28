import { useState, useEffect } from 'react'

export const useHeaderSticky = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > window.innerHeight

      setIsHeaderSticky(isSticky)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isHeaderSticky
}
