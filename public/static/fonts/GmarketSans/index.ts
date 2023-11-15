import localFont from 'next/font/local'

export const gmarketSans = localFont({
  src: [
    {
      path: './GmarketSansTTFBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './GmarketSansTTFLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './GmarketSansTTFMedium.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})
