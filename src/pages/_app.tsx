import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import dynamic from 'next/dynamic'
import Scripts from '@/components/Scripts'

// Gtag를 동적으로 로드하여 서버 사이드에서 실행되지 않도록 설정
const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Scripts />  {/* ✅ GA4 스크립트 추가 */}
        <Gtag />  {/* ✅ 페이지 이동 감지 추가 */}
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
