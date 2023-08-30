import localFont from 'next/font/local'

export const montserratAlternates = localFont({
  src: [
    {
      path: '../MontserratAlternates/MontserratAlternates-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../MontserratAlternates/MontserratAlternates-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../MontserratAlternates/MontserratAlternates-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../MontserratAlternates/MontserratAlternates-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
