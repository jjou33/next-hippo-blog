import localFont from 'next/font/local'

export const nanumSquareNeo = localFont({
  src: [
    {
      path: './NanumSquareNeoTTF-aLt.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './NanumSquareNeoTTF-bRg.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './NanumSquareNeoTTF-cBd.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
