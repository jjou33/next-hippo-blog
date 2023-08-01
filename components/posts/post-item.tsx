import Link from 'next/link'
import Image from 'next/image'
import classes from './post-item.module.css'
import Typography from 'components/common/Typography'
import { theme } from 'styles'

const PostItem = props => {
  const { title, image, excerpt, date, slug } = props.post

  const formattedDate = new Date(date).toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <Typography
            variant="h3"
            aggressive="headline_multiline_001"
            align="center"
            padding="48px 0 24px 0"
          >
            {title}
          </Typography>
          <time>{formattedDate}</time>
          <Typography
            variant="p"
            aggressive="body_multiline_000"
            align="center"
            padding="0 0 48px 0"
            color={theme.colors.primary_003}
          >
            {excerpt}
          </Typography>
        </div>
      </Link>
    </li>
  )
}

export default PostItem
