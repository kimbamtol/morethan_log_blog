import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '@/libs/gtag'

const Gtag = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {  // ✅ url의 타입을 명시적으로 string으로 지정
      gtag.pageview(url)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null
}

export default Gtag
