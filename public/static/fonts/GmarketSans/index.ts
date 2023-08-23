import localFont from 'next/font/local'

export const gmarketSans = localFont({
  src: [
    {
      path: './GmarketSansBold.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GmarketSansLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './GmarketSansMedium.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})
