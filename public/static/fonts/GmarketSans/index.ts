import localFont from 'next/font/local'

export const gmarketSans = localFont({
  src: [
    {
      path: './GmarketSansTTFBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './GmarketSansTTFLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './GmarketSansTTFMedium.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})
