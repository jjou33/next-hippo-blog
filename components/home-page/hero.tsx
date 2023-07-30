import Image from 'next/image'
import classes from './hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/computer.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Hippo dev</h1>
      <p>
        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
      </p>
    </section>
  )
}

export default Hero
