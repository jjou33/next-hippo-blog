import Router from 'next/router'
import { useEffect, useState } from 'react'

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      setIsLoading(true)
    }

    const end = () => {
      // setIsLoading(false)
      setTimeout(() => {
        setIsLoading(false)
      }, 1200)
    }

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', start)

    return () => {
      Router.events.on('routeChangeStart', start)
      Router.events.on('routeChangeComplete', end)
      Router.events.on('routeChangeError', start)
    }
  }, [])

  return isLoading ? true : false
}
