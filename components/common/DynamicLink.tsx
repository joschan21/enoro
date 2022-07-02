import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Link as ReactScrollLink } from 'react-scroll'

interface DynamicLinkProps {
  linkTo: string
  text: string
  className: string
  activeClassName?: string
}

const DynamicLink: FC<DynamicLinkProps> = ({ linkTo, text, className, activeClassName }) => {
  // Hooks
  const router = useRouter()

  const currentPath = router.pathname
  const userIsOnHomepage = currentPath === '/'

  return (
    <React.Fragment key={linkTo}>
      {userIsOnHomepage ? (
        <ReactScrollLink
          key={linkTo}
          href={linkTo}
          spy={true}
          smooth={true}
          duration={500}
          activeClass={activeClassName}
          to={linkTo}
          className={className}>
          {text}
        </ReactScrollLink>
      ) : (
        <Link prefetch={false} href={`/#${linkTo}`} key={linkTo}>
          <a className={className}>
            {text}
          </a>
        </Link>
      )}
    </React.Fragment>
  )
}

export default DynamicLink
